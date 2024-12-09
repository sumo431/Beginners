import React, { useState } from 'react';
import { useRouter } from 'next/router'; // Import the router for navigation
import './Quiz.css';

const questions = [
    {
        question: "What is the function of the Home button on an iPhone?",
        options: [
            "Take a photo",
            "Go to the home screen",
            "Adjust volume",
            "Open the app switcher"
        ],
        answer: "Go to the home screen"
    },
    {
        question: "Which gesture is used to unlock an iPhone?",
        options: [
            "Swipe up",
            "Double-tap",
            "Press the Home button",
            "Swipe down"
        ],
        answer: "Swipe up"
    },
    {
        question: "What app is used for sending text messages?",
        options: [
            "Mail",
            "Messages",
            "Safari",
            "Photos"
        ],
        answer: "Messages"
    },
    // New questions
    {
        question: "What does the iPhone's 'Do Not Disturb' mode do?",
        options: [
            "Silences calls and notifications",
            "Turns off the device",
            "Increases battery life",
            "Disables Wi-Fi"
        ],
        answer: "Silences calls and notifications"
    },
    {
        question: "Which app would you use to take a screenshot on an iPhone?",
        options: [
            "Notes",
            "Photos",
            "Settings",
            "There is a specific screenshot button combination"
        ],
        answer: "There is a specific screenshot button combination"
    },
    {
        question: "What does Siri do?",
        options: [
            "Helps with setting alarms",
            "Acts as a virtual assistant",
            "Provides weather updates",
            "All of the above"
        ],
        answer: "All of the above"
    },
    // Adding 20 more questions
    {
        question: "How can you update the iOS on your iPhone?",
        options: [
            "Through Settings > General > Software Update",
            "By connecting to iTunes",
            "You can't update iOS",
            "Only through Apple support"
        ],
        answer: "Through Settings > General > Software Update"
    },
]
