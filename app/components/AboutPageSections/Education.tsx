import React from 'react'
import { Container, Heading } from '../index'
import { ParaContent } from '../HomePageSections'

const Education: React.FC = () => {
    return (
        <Container>
            <Heading>
                Education & Learning Journey
            </Heading>
            <ParaContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Education */}
                    <div>
                        <h3 className="text-xl font-semibold mb-2">🎓 Education</h3>
                        <p className="text-sm text-gray-400 flex flex-col space-y-1">
                            <span>Bachelor of Computer Applications (BCA)</span>
                            <span className="text-gray-400 font-medium">Ambedkar Institute of Technology, Delhi</span>
                            <span>Completed: 2025</span>
                        </p>
                    </div>

                    {/* Learning Journey */}
                    <div>
                        <h3 className="text-xl font-semibold mb-2">📚 Learning Journey</h3>
                        <p className="text-sm text-gray-400 flex flex-col space-y-1">
                            <span>Focused on frontend development for the past 6+ months.</span>
                            <span>Built projects like a full-featured blog app.</span>
                            <span>Completed DSA course from CodeHelp.</span>
                            <span>Regularly explore React, Tailwind, APIs, and more.</span>
                        </p>
                    </div>
                </div>

            </ParaContent>
        </Container>
    )
}

export default Education