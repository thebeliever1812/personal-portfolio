import React from 'react'
import { Container, Heading, HighlightText } from '../index'
import { ParaContent } from '../HomePageSections'

const WhoIAm: React.FC = () => {
    return (
        <Container>
            <Heading>
                WHO I AM
            </Heading>

            <ParaContent>
                <p className="text-gray-400 leading-relaxed tracking-wide">
                    Hi, I'm <HighlightText>Basir Ahmad</HighlightText> — a full-stack developer based in <HighlightText>Delhi, India</HighlightText>. I recently completed my <HighlightText>Bachelor of Computer Applications &#40;BCA&#41;</HighlightText> from <HighlightText>Ambedkar DSEU Shakarpur Campus-1</HighlightText>.
                </p>
                <p className="text-gray-400 leading-relaxed tracking-wide">
                    I'm <HighlightText>curious</HighlightText>, <HighlightText>detail-oriented</HighlightText>, and <HighlightText>calm under deadlines</HighlightText>. I enjoy <HighlightText>breaking problems into simple steps</HighlightText> and <HighlightText>communicating clearly</HighlightText> with teammates. Recently, I've been sharpening my <HighlightText>MERN</HighlightText> skills—<HighlightText>designing clear API contracts</HighlightText>, <HighlightText>optimizing queries</HighlightText>, and <HighlightText>building reliable integrations</HighlightText>—so features ship smoothly end to end.
                </p>
            </ParaContent>
        </Container>
    )
}

export default WhoIAm