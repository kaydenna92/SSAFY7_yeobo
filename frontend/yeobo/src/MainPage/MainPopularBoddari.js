import { Link } from 'react-router-dom';
import './MainPopularBoddari.scss';

function Like(like) {
  if(like === "True") {
    return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18"><path fill="none" d="M0 0H24V24H0z"/><path d="M16.5 3C19.538 3 22 5.5 22 9c0 7-7.5 11-10 12.5C9.5 20 2 16 2 9c0-3.5 2.5-6 5.5-6C9.36 3 11 4 12 5c1-1 2.64-2 4.5-2z" fill="rgba(244,155,155,1)"/></svg>
  } else if(like === "False") {
    return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18"><path fill="none" d="M0 0H24V24H0z"/><path d="M16.5 3C19.538 3 22 5.5 22 9c0 7-7.5 11-10 12.5C9.5 20 2 16 2 9c0-3.5 2.5-6 5.5-6C9.36 3 11 4 12 5c1-1 2.64-2 4.5-2zm-3.566 15.604c.881-.556 1.676-1.109 2.42-1.701C18.335 14.533 20 11.943 20 9c0-2.36-1.537-4-3.5-4-1.076 0-2.24.57-3.086 1.414L12 7.828l-1.414-1.414C9.74 5.57 8.576 5 7.5 5 5.56 5 4 6.656 4 9c0 2.944 1.666 5.533 4.645 7.903.745.592 1.54 1.145 2.421 1.7.299.189.595.37.934.572.339-.202.635-.383.934-.571z" fill="rgba(244,155,155,1)"/></svg>
  }
}

function BoddariRankComponent(props) {
  return<div className='boddariRank'>
    <div className='profile-img-wrapper'>
      <Link to={props.link}>
        <img className='profile-img' src={props.src} alt="" />
      </Link>
    </div>
    <div className='boddari-info'>
      <div className='boddari-title'>
        <p className='boddari-name'>{props.name}</p>
        <p className='boddari-username'>{props.username}</p>
      </div>
      <div className='boddari-desc'>
        <p className='boddari-desc-text'>{props.desc}</p>
      </div>
    </div>
    <div className='boddari-heart'>
      {Like(props.like)}
    </div>
  </div>
}
// <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18"><path fill="none" d="M0 0H24V24H0z"/><path d="M16.5 3C19.538 3 22 5.5 22 9c0 7-7.5 11-10 12.5C9.5 20 2 16 2 9c0-3.5 2.5-6 5.5-6C9.36 3 11 4 12 5c1-1 2.64-2 4.5-2z" fill="rgba(244,155,155,1)"/></svg>
// <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18"><path fill="none" d="M0 0H24V24H0z"/><path d="M16.5 3C19.538 3 22 5.5 22 9c0 7-7.5 11-10 12.5C9.5 20 2 16 2 9c0-3.5 2.5-6 5.5-6C9.36 3 11 4 12 5c1-1 2.64-2 4.5-2zm-3.566 15.604c.881-.556 1.676-1.109 2.42-1.701C18.335 14.533 20 11.943 20 9c0-2.36-1.537-4-3.5-4-1.076 0-2.24.57-3.086 1.414L12 7.828l-1.414-1.414C9.74 5.57 8.576 5 7.5 5 5.56 5 4 6.656 4 9c0 2.944 1.666 5.533 4.645 7.903.745.592 1.54 1.145 2.421 1.7.299.189.595.37.934.572.339-.202.635-.383.934-.571z" fill="rgba(244,155,155,1)"/></svg>

const MainPopularBoddari = () => {
  return <div class="MainPopularBoddari">
    <div className='monthSection'>
      <div className='titleModule'>
        <p className='mainTitle'>어제의 인기 보따리 TOP 5</p>
        <p className='subTitle'>매일 자정 갱신됩니다.</p>
      </div>
    </div>
    <BoddariRankComponent name="보따리 이름" username="백한나" desc="보따리 설명입니당asdfasdfasdfadsfasdfasdf다디라다리다리다릳랃릳;릳; 하하 이 보따리가 최고입니다 라핳하ㅏ..." link="/mypage" src="https://mblogthumb-phinf.pstatic.net/MjAyMDAyMDdfMTYw/MDAxNTgxMDg1NzUxMTUy.eV1iEw2gk2wt_YqPWe5F7SroOCkXJy2KFwmTDNzM0GQg.Z3Kd5MrDh07j86Vlb2OhAtcw0oVmGCMXtTDjoHyem9og.JPEG.7wayjeju/%EB%B0%B0%EC%9A%B0%ED%94%84%EB%A1%9C%ED%95%84%EC%82%AC%EC%A7%84_IMG7117.jpg?type=w800" like="True"/>
    <BoddariRankComponent name="보따리 이름" username="백한나" desc="보따리 설명입니당asdfasdfasdfadsfasdfasdf다디라다리다리다릳랃릳;릳; 하하 이 보따리가 최고입니다 라핳하ㅏ..." link="/mypage" src="https://mblogthumb-phinf.pstatic.net/MjAyMDAyMDdfMTYw/MDAxNTgxMDg1NzUxMTUy.eV1iEw2gk2wt_YqPWe5F7SroOCkXJy2KFwmTDNzM0GQg.Z3Kd5MrDh07j86Vlb2OhAtcw0oVmGCMXtTDjoHyem9og.JPEG.7wayjeju/%EB%B0%B0%EC%9A%B0%ED%94%84%EB%A1%9C%ED%95%84%EC%82%AC%EC%A7%84_IMG7117.jpg?type=w800" like="False"/>
    <BoddariRankComponent name="보따리 이름" username="백한나" desc="보따리 설명입니당asdfasdfasdfadsfasdfasdf다디라다리다리다릳랃릳;릳; 하하 이 보따리가 최고입니다 라핳하ㅏ..." link="/mypage" src="https://mblogthumb-phinf.pstatic.net/MjAyMDAyMDdfMTYw/MDAxNTgxMDg1NzUxMTUy.eV1iEw2gk2wt_YqPWe5F7SroOCkXJy2KFwmTDNzM0GQg.Z3Kd5MrDh07j86Vlb2OhAtcw0oVmGCMXtTDjoHyem9og.JPEG.7wayjeju/%EB%B0%B0%EC%9A%B0%ED%94%84%EB%A1%9C%ED%95%84%EC%82%AC%EC%A7%84_IMG7117.jpg?type=w800" like="False"/>
    <BoddariRankComponent name="보따리 이름" username="백한나" desc="보따리 설명입니당asdfasdfasdfadsfasdfasdf다디라다리다리다릳랃릳;릳; 하하 이 보따리가 최고입니다 라핳하ㅏ..." link="/mypage" src="https://mblogthumb-phinf.pstatic.net/MjAyMDAyMDdfMTYw/MDAxNTgxMDg1NzUxMTUy.eV1iEw2gk2wt_YqPWe5F7SroOCkXJy2KFwmTDNzM0GQg.Z3Kd5MrDh07j86Vlb2OhAtcw0oVmGCMXtTDjoHyem9og.JPEG.7wayjeju/%EB%B0%B0%EC%9A%B0%ED%94%84%EB%A1%9C%ED%95%84%EC%82%AC%EC%A7%84_IMG7117.jpg?type=w800" like="True"/>
    <BoddariRankComponent name="보따리 이름" username="백한나" desc="보따리 설명입니당asdfasdfasdfadsfasdfasdf다디라다리다리다릳랃릳;릳; 하하 이 보따리가 최고입니다 라핳하ㅏ..." link="/mypage" src="https://mblogthumb-phinf.pstatic.net/MjAyMDAyMDdfMTYw/MDAxNTgxMDg1NzUxMTUy.eV1iEw2gk2wt_YqPWe5F7SroOCkXJy2KFwmTDNzM0GQg.Z3Kd5MrDh07j86Vlb2OhAtcw0oVmGCMXtTDjoHyem9og.JPEG.7wayjeju/%EB%B0%B0%EC%9A%B0%ED%94%84%EB%A1%9C%ED%95%84%EC%82%AC%EC%A7%84_IMG7117.jpg?type=w800" like="False"/>
  </div>
}
export default MainPopularBoddari;