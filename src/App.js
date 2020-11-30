import './App.css';
import user from './components/Profile/data';

import Profile from './components/Profile/Profile';

export default function App() {
  return (
    <Profile
      imgUrl={user.avatar}
      name={user.name}
      tag={user.tag}
      location={user.location}
      followers={user.stats.followers}
      views={user.stats.views}
      likes={user.stats.likes}
    />
  );
}
