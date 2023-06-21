import React from 'react';
import './feedback_section.scss';

const feedbacksData = [
  {
    id: '1',
    name: 'Иван',
    project: 'Проект дома из кленового бруса',
    feedback:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vestibulum est eu condimentum facilisis. Nam mollis, ligula sit amet tempor rhoncus, erat risus posuere nunc, at bibendum justo mauris ac velit. Aliquam tristique iaculis augue quis bibendum. Nullam ipsum ex, rutrum nec placerat id, dignissim varius ex. Morbi laoreet convallis mauris eget lobortis. Mauris vel auctor odio. Vivamus id scelerisque orci, vitae maximus lectus. Etiam scelerisque ultrices elementum. Vestibulum mollis euismod dui, vitae venenatis ante ornare scelerisque. Suspendisse vel ultricies arcu.',
  },
  {
    id: '2',
    name: 'Иван',
    project: 'Проект дома из кленового бруса',
    feedback:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vestibulum est eu condimentum facilisis. Nam mollis, ligula sit amet tempor rhoncus, erat risus posuere nunc, at bibendum justo mauris ac velit. Aliquam tristique iaculis augue quis bibendum. Nullam ipsum ex, rutrum nec placerat id, dignissim varius ex. Morbi laoreet convallis mauris eget lobortis. Mauris vel auctor odio. Vivamus id scelerisque orci, vitae maximus lectus. Etiam scelerisque ultrices elementum. Vestibulum mollis euismod dui, vitae venenatis ante ornare scelerisque. Suspendisse vel ultricies arcu.',
  },
  {
    id: '3',
    name: 'Иван',
    project: 'Проект дома из кленового бруса',
    feedback:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vestibulum est eu condimentum facilisis. Nam mollis, ligula sit amet tempor rhoncus, erat risus posuere nunc, at bibendum justo mauris ac velit. Aliquam tristique iaculis augue quis bibendum. Nullam ipsum ex, rutrum nec placerat id, dignissim varius ex. Morbi laoreet convallis mauris eget lobortis. Mauris vel auctor odio. Vivamus id scelerisque orci, vitae maximus lectus. Etiam scelerisque ultrices elementum. Vestibulum mollis euismod dui, vitae venenatis ante ornare scelerisque. Suspendisse vel ultricies arcu.',
  },
  {
    id: '4',
    name: 'Иван',
    project: 'Проект дома из кленового бруса',
    feedback:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vestibulum est eu condimentum facilisis. Nam mollis, ligula sit amet tempor rhoncus, erat risus posuere nunc, at bibendum justo mauris ac velit. Aliquam tristique iaculis augue quis bibendum. Nullam ipsum ex, rutrum nec placerat id, dignissim varius ex. Morbi laoreet convallis mauris eget lobortis. Mauris vel auctor odio. Vivamus id scelerisque orci, vitae maximus lectus. Etiam scelerisque ultrices elementum. Vestibulum mollis euismod dui, vitae venenatis ante ornare scelerisque. Suspendisse vel ultricies arcu.',
  },
];
export const FeedbackSection = (): JSX.Element => {
  return (
    <div className="feedbackSectionWrapper">
      <h2>Отзывы клиентов</h2>
      <div className="feedbackItemsWrapper">
        {feedbacksData.map(({ id, feedback, project, name }) => (
          <div className="feedbackItem" key={id}>
            <h4>{name}</h4>
            <p className="feedbackProjectName">{project}</p>
            <p className="feedbackBody">{feedback}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
