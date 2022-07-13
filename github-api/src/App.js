import Layout from './components/layout/index';
import NoSearch from './components/no-search/index';
import Profile from './components/profile/index';
import Repositories from './components/repositories/index';
import useGithub from './hooks/GithubHooks';

const App = () => {
  const { githubState } = useGithub();
  return (
    <Layout>
      {githubState.hasUser ? (
        <>
          {githubState.loading ? (
            <p>Loading</p>
          ) : (
            <>
              <Profile />
              <Repositories />
            </>
          )}
        </>
      ) : (
        <NoSearch />
      )}
    </Layout>
  );
};

export default App;