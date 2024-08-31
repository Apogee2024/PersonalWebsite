import ReactMarkdown from 'react-markdown';
import './AboutPage.css'
function AboutPage() {
    const markdownContent = `
# About Me

I am a software developer with a passion for creating. I  created automation tools for everyday tasks at Tesla. I also made a cold email automation tool.  I went to UC Berkeley and studied
molecular and cell biology. I'm from in Silicon Valley and I've loved computers since I was a kid. Looking for more, I started learning python in my spare time. Ever since, I solved my
first challenge, fizzbuzz, I've known that software development was for me. When I solved the problem a shot of dopamine raced through my body and I was hooked. Even now over 2 years later,
the feeling still remains.  I am familiar with python, javascript and C. 
`;

    return(
        <div className="About">
            {/* Since the markdown content already has an h1, you might not need this h2 */}
            <ReactMarkdown>{markdownContent}</ReactMarkdown>
        </div>
    );
}

export default AboutPage;
