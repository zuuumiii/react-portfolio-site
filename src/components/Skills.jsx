import { Circle } from 'react-circle';
import { requestStates } from '../constants';
import { useSkills } from '../customHooks/useSkills'

export const Skills = () => {
  const [sortedLnaguageList, fetchRequestState, converseCountToPercentage] = useSkills();

  return (
    <div id='Skills'>
      <div className='container'>
        <div className='heading'>
          <h2>Skills</h2>
        </div>
        <div className="skills-container">
          {
            fetchRequestState === requestStates.loading && (
              <p className='description'>取得中</p>
            )
          }

          {
            fetchRequestState === requestStates.success && (
              sortedLnaguageList().map((item, index) => (
                <div className='skill-item' key={index}>
                  <p className='description'><strong>{item.language}</strong></p>
                  <Circle
                    animate
                    progress={converseCountToPercentage(item.count)}
                  />
                </div>
              )))
          }

          {
            fetchRequestState === requestStates.error && (
              <p className='description'>エラーが発生しました</p>
            )
          }

        </div>
      </div>
    </div>
  );
}
