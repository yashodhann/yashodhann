import React from "react";

function ExperienceCard({ experience }) {
    return (
        <>
            <div className="p-5 mb-4 border border-gray-100 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700" key={experience.id}>
                <time className="text-lg font-semibold text-gray-900 dark:text-white">{experience.pos}</time>
                {/* <time className="text-lg font-semibold text-gray-900 dark:text-white">{experience.company}</time> */}
                <div className="text-sm font-normal text-gray-900 dark:text-white">{experience.company}</div>
                <div className="text-sm font-normal text-gray-900 dark:text-white">{experience.time}</div>
                <ol className="mt-3 divide-y divider-gray-200 dark:divide-gray-700">
                    <li>
                        <a href={experience.creds} className="text-left block p-3 sm:flex hover:bg-gray-100 dark:hover:bg-gray-700">
                            <img className="w-12 h-12 mb-3 mr-3 rounded-full sm:mb-0" src={experience.img} alt={experience.company} />
                            <div className="text-gray-600 dark:text-gray-400">
                                {experience.tags.map((tag, index) => {
                                    return (
                                        <div className="text-base font-normal">{index+1}. {tag}</div>
                                    );
                                })}
                            </div>
                        </a>
                    </li>
                </ol>
            </div>
        </>
    )
}

export default ExperienceCard
