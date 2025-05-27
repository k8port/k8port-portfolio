export interface ContentJson {
    title: string;
    description: string;
    sections: {
        branding: {
            motto: string;
            motto_translation: string;
        };
        skillsPanel: {
            label: string;
            content: Topic[];
        };
        aboutMe: {
            label: string;
            content: {
                who: { text: string; label: string };
                what: { text: string; label: string };
                why: { text: string; label: string };
                where: { text: string; label: string };
                when: { text: string; label: string };
            };
        };
    };
}

// 'Topic a topmost level of skill'
export interface Topic {
    topic: string;
    topicList: Subtopic[];
}

export interface Subtopic {
    subtopic?: string;
    subtopicText?: string;
    subtopicList?: Subtopic[] | SubtopicBlock[];
}

export interface SubtopicBlock {
    subtopic: string;
    subtopicText?: string;
    iconList: string[];
    level?: DreyfusLevel;
}

// Dreyfus Model of Skill Acquisition
export enum DreyfusLevel {
    Novice = 0,
    AdvancedBeginner = 1,
    Competent = 2,
    Proficient = 3,
    Expert = 4,
}

export const DreyfusLevelBadgeType: Record<
    DreyfusLevel,
    'violet' | 'blue' | 'green' | 'yellow' | 'red'
> = {
    [DreyfusLevel.Novice]: 'red',
    [DreyfusLevel.AdvancedBeginner]: 'yellow',
    [DreyfusLevel.Competent]: 'green',
    [DreyfusLevel.Proficient]: 'blue',
    [DreyfusLevel.Expert]: 'violet',
};
