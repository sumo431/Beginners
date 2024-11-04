import { useState, useEffect } from 'react';
import IphoneSearch from '../app/IphoneSupport/IphoneSearch';
import ProgressTracker from '../Checkpoints/ProgressTracker';
import '../app/IphoneSupport/IphoneSupport.css';
import './IphoneQuiz.js';

export default function IphonePage() {
    const [videoComments, setVideoComments] = useState([[], [], []]);
    const [commentInputs, setCommentInputs] = useState(['', '', '']);
    const [replyInputs, setReplyInputs] = useState([[], [], []]);
    const [nestedReplyInputs, setNestedReplyInputs] = useState([[], [], []]);
    const [uploadedVideos, setUploadedVideos] = useState([[], [], []]);
    const [searchQuery, setSearchQuery] = useState('');
    const [canProceed, setCanProceed] = useState(false);
    const [showTasks, setShowTasks] = useState(false);
    const [message, setMessage] = useState('');
    const [reloadKey, setReloadKey] = useState(0); // New state to trigger re-render
    const [quizPassed, setQuizPassed] = useState(false);

    // Check for quiz completion in local storage
    useEffect(() => {
        const passed = localStorage.getItem('quizPassed');
        if (passed === 'true') {
            setQuizPassed(true);
            setMessage('Congratulations! You have passed the quiz! 🎉');
            localStorage.removeItem('quizPassed'); // Clear after reading
        }
    }, []);

    // Handle comment submission
    const handleCommentSubmit = (index) => {
        const commentInput = commentInputs[index];
        if (commentInput) {
            const updatedComments = [...videoComments];
            updatedComments[index].push({ text: commentInput, replies: [] });
            setVideoComments(updatedComments);
            setCommentInputs((prev) => {
                const newInputs = [...prev];
                newInputs[index] = '';
                return newInputs;
            });
        }
    };

    // Handle reply submission
    const handleReplySubmit = (videoIndex, commentIndex) => {
        const replyInput = replyInputs[videoIndex][commentIndex];
        if (replyInput) {
            const updatedComments = [...videoComments];
            updatedComments[videoIndex][commentIndex].replies.push({ text: replyInput, replies: [] });
            setVideoComments(updatedComments);
            setReplyInputs((prev) => {
                const newReplies = [...prev];
                newReplies[videoIndex][commentIndex] = '';
                return newReplies;
            });
        }
    };

    // Handle nested reply submission
    const handleNestedReplySubmit = (videoIndex, commentIndex, replyIndex) => {
        const nestedReplyInput = nestedReplyInputs[videoIndex][commentIndex]?.[replyIndex];
        if (nestedReplyInput) {
            const updatedComments = [...videoComments];
            updatedComments[videoIndex][commentIndex].replies[replyIndex].replies.push(nestedReplyInput);
            setVideoComments(updatedComments);
            setNestedReplyInputs((prev) => {
                const newNestedReplies = [...prev];
                newNestedReplies[videoIndex][commentIndex][replyIndex] = '';
                return newNestedReplies;
            });
        }
    };

    // Handle video upload
    const handleVideoUpload = (index, event) => {
        const file = event.target.files[0];
        if (file) {
            const updatedVideos = [...uploadedVideos];
            updatedVideos[index].push(URL.createObjectURL(file));
            setUploadedVideos(updatedVideos);
            event.target.value = null;
        }
    };

    const handleSearch = (e) => {
        e.preventDefault();
        console.log('Searching for:', searchQuery);
    };

    const handleCompletion = (isComplete) => {
        setCanProceed(isComplete);
        if (isComplete) {
            setReloadKey((prev) => prev + 1); // Trigger a re-render
        }
    };

    return (
        <div className="min-h-screen bg-black text-white flex flex-col items-center">
            <h1 className="glow cursive-font animate-fadeIn">iPhone Video Guides</h1>
            <IphoneSearch searchQuery={searchQuery} setSearchQuery={setSearchQuery} handleSearch={handleSearch} />

            {/* Distinctive CheckList button and Basic Knowledge Test message */}
            <button
                className="toggle-tasks-button"
                onClick={() => setShowTasks((prev) => !prev)}
            >
                CheckList
            </button>

            {!canProceed && (
                <div className="warning">
                    Basic Knowledge Test
                </div>
            )}

            {quizPassed && message && (
                <div className="success-message">
                    {message}
                </div>
            )}

            {/* Display Progress Tracker when CheckList button is clicked */}
            {showTasks && (
                <div className="progress-tracker-box">
                    <ProgressTracker onCompletion={handleCompletion} />
                </div>
            )}

            {/* Display embedded videos with comment sections */}
            {['https://www.youtube.com/watch?v=0nG7pAXRgvE', 'https://www.youtube.com/watch?v=pXvd8HNAdAk', 'https://www.youtube.com/watch?v=eyW7ytgNVwU'].map((videoUrl, index) => (
                <div key={index} className="video-section mb-8">
                    <iframe
                        width="560"
                        height="315"
                        src={videoUrl.replace('watch?v=', 'embed/')}
                        title={`Video ${index + 1}`}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>

                    <div className="video-upload mt-2">
                        <input
                            type="file"
                            accept="video/*"
                            onChange={(event) => handleVideoUpload(index, event)}
                            className="upload-input"
                        />
                        <button className="upload-button hover:bg-gray-600 transition duration-300">Upload Your Video</button>
                    </div>

                    {/* Display uploaded videos */}
                    <div className="uploaded-videos">
                        {uploadedVideos[index].map((videoSrc, videoIndex) => (
                            <video key={videoIndex} width="320" height="240" controls>
                                <source src={videoSrc} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        ))}
                    </div>

                    {/* Comment section */}
                    <div className="feedback-form mt-4">
                        <h3 className="text-lg font-bold">Leave a Comment</h3>
                        <input
                            type="text"
                            value={commentInputs[index]}
                            onChange={(e) => {
                                const updatedInputs = [...commentInputs];
                                updatedInputs[index] = e.target.value;
                                setCommentInputs(updatedInputs);
                            }}
                            placeholder="Add a comment"
                            className="comment-text"
                        />
                        <button onClick={() => handleCommentSubmit(index)} className="submit-button hover:bg-gray-700 transition duration-300">Submit</button>
                    </div>

                    {/* Display comments and replies */}
                    <div className="comments mt-4">
                        {videoComments[index].map((comment, commentIndex) => (
                            <div key={commentIndex} className="comment">
                                <p>{comment.text}</p>
                                <input
                                    type="text"
                                    value={replyInputs[index]?.[commentIndex] || ''}
                                    onChange={(e) => {
                                        const updatedReplies = [...replyInputs];
                                        if (!updatedReplies[index]) updatedReplies[index] = [];
                                        updatedReplies[index][commentIndex] = e.target.value;
                                        setReplyInputs(updatedReplies);
                                    }}
                                    placeholder="Add a reply"
                                    className="reply-text"
                                />
                                <button onClick={() => handleReplySubmit(index, commentIndex)} className="reply-button hover:bg-gray-700 transition duration-300">Reply</button>

                                {comment.replies.map((reply, replyIndex) => (
                                    <div key={replyIndex} className="nested-reply ml-6">
                                        <p>{reply.text}</p>
                                        <input
                                            type="text"
                                            value={nestedReplyInputs[index]?.[commentIndex]?.[replyIndex] || ''}
                                            onChange={(e) => {
                                                const updatedNestedReplies = [...nestedReplyInputs];
                                                if (!updatedNestedReplies[index]) updatedNestedReplies[index] = [];
                                                if (!updatedNestedReplies[index][commentIndex]) updatedNestedReplies[index][commentIndex] = [];
                                                updatedNestedReplies[index][commentIndex][replyIndex] = e.target.value;
                                                setNestedReplyInputs(updatedNestedReplies);
                                            }}
                                            placeholder="Add a nested reply"
                                            className="reply-text"
                                        />
                                        <button onClick={() => handleNestedReplySubmit(index, commentIndex, replyIndex)} className="reply-button hover:bg-gray-700 transition duration-300">Reply</button>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}
