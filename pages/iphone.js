import { useState } from 'react';
import IphoneSearch from '../app/IphoneSupport/IphoneSearch';
import '../app/IphoneSupport/IphoneSupport.css';

export default function IphonePage() {
    const [videoComments, setVideoComments] = useState([[], [], []]);
    const [commentInputs, setCommentInputs] = useState(['', '', '']);
    const [replyInputs, setReplyInputs] = useState([[], [], []]);
    const [nestedReplyInputs, setNestedReplyInputs] = useState([[], [], []]);
    const [uploadedVideos, setUploadedVideos] = useState([[], [], []]);
    const [searchQuery, setSearchQuery] = useState('');

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

    return (
        <div className="min-h-screen bg-black text-white flex flex-col items-center">
            <h1 className="glow cursive-font animate-fadeIn">iPhone Video Guides</h1>
            <IphoneSearch searchQuery={searchQuery} setSearchQuery={setSearchQuery} handleSearch={handleSearch} />

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

                    <div className="uploaded-videos">
                        {uploadedVideos[index].map((videoSrc, videoIndex) => (
                            <video key={videoIndex} width="320" height="240" controls>
                                <source src={videoSrc} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        ))}
                    </div>

                    <div className="feedback-form mt-4">
                        <h3 className="comment-prompt">This is the comment box:</h3>
                        <textarea
                            className="comment-input"
                            placeholder="Leave a comment..."
                            value={commentInputs[index]}
                            onChange={(e) => {
                                const newInputs = [...commentInputs];
                                newInputs[index] = e.target.value;
                                setCommentInputs(newInputs);
                            }}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter') {
                                    e.preventDefault();
                                    handleCommentSubmit(index);
                                }
                            }}
                        />
                        <button onClick={() => handleCommentSubmit(index)}>Submit</button>
                    </div>

                    <div className="comment-display mt-2">
                        {videoComments[index].map((comment, commentIndex) => (
                            <div key={commentIndex} className="comment-box">
                                <p className="comment-text"><strong>Comment:</strong> {comment.text}</p>
                                <button className="reply-button" onClick={() => {
                                    const newReplies = [...replyInputs];
                                    if (!newReplies[index]) newReplies[index] = [];
                                    newReplies[index][commentIndex] = '';
                                    setReplyInputs(newReplies);
                                }}>Reply</button>

                                {replyInputs[index][commentIndex] !== undefined && (
                                    <div>
                                        <textarea
                                            className="comment-input"
                                            placeholder="Leave a reply..."
                                            value={replyInputs[index][commentIndex] || ''}
                                            onChange={(e) => {
                                                const newReplies = [...replyInputs];
                                                if (!newReplies[index]) newReplies[index] = [];
                                                newReplies[index][commentIndex] = e.target.value;
                                                setReplyInputs(newReplies);
                                            }}
                                            onKeyDown={(e) => {
                                                if (e.key === 'Enter') {
                                                    e.preventDefault();
                                                    handleReplySubmit(index, commentIndex);
                                                }
                                            }}
                                        />
                                        <button onClick={() => handleReplySubmit(index, commentIndex)}>Submit Reply</button>
                                    </div>
                                )}

                                {comment.replies.length > 0 && (
                                    <div className="replies">
                                        {comment.replies.map((reply, replyIndex) => (
                                            <div key={replyIndex} className="reply-box">
                                                <p className="reply-text">Reply: {reply.text}</p>
                                                <button className="reply-button" onClick={() => {
                                                    const newNestedReplies = [...nestedReplyInputs];
                                                    if (!newNestedReplies[index]) newNestedReplies[index] = [];
                                                    if (!newNestedReplies[index][commentIndex]) newNestedReplies[index][commentIndex] = [];
                                                    newNestedReplies[index][commentIndex][replyIndex] = '';
                                                    setNestedReplyInputs(newNestedReplies);
                                                }}>Reply</button>

                                                {nestedReplyInputs[index][commentIndex]?.[replyIndex] !== undefined && (
                                                    <div>
                                                        <textarea
                                                            className="comment-input"
                                                            placeholder="Leave a reply to this reply..."
                                                            value={nestedReplyInputs[index][commentIndex]?.[replyIndex] || ''}
                                                            onChange={(e) => {
                                                                const newNestedReplies = [...nestedReplyInputs];
                                                                if (!newNestedReplies[index]) newNestedReplies[index] = [];
                                                                if (!newNestedReplies[index][commentIndex]) newNestedReplies[index][commentIndex] = [];
                                                                newNestedReplies[index][commentIndex][replyIndex] = e.target.value;
                                                                setNestedReplyInputs(newNestedReplies);
                                                            }}
                                                            onKeyDown={(e) => {
                                                                if (e.key === 'Enter') {
                                                                    e.preventDefault();
                                                                    handleNestedReplySubmit(index, commentIndex, replyIndex);
                                                                }
                                                            }}
                                                        />
                                                        <button onClick={() => handleNestedReplySubmit(index, commentIndex, replyIndex)}>Submit Nested Reply</button>
                                                    </div>
                                                )}

                                                {reply.replies && reply.replies.length > 0 && (
                                                    <div className="nested-replies">
                                                        {reply.replies.map((nestedReply, nestedReplyIndex) => (
                                                            <p key={nestedReplyIndex} className="reply-text">Nested Reply: {nestedReply}</p>
                                                        ))}
                                                    </div>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}
