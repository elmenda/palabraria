import { TOPICS } from './course.data';
export const getTopics = () => TOPICS;
export const getTopic = (topicId: string) => TOPICS.find(t => t.id === topicId);
export const getSection = (topicId: string, sectionId: string) =>
  getTopic(topicId)?.sections.find(s => s.id === sectionId);
