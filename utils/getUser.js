const getUser = async () => {
  const reposRes = await fetch('https://api.github.com/users/lucasbazev/repos?sort=updated');
  const repos = await reposRes.json();

  const userRes = await fetch('https://api.github.com/users/lucasbazev');
  const userData = await userRes.json();

  const extractReposData = (repo) => ({
    id: repo.id,
    name: repo.name,
    language: repo.language
  })

  const reposData = repos.map(extractReposData);

  return {
    userData,
    reposData
  }
}

export default getUser;