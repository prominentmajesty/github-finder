import React from 'react';
import PropType from 'prop-types';
import RepoItem from './RepoItem';

function RepoList({repos}) {
  return (
    <div className='rounded-lg shadow-lg card bg-base-100'>
        <div className='card-body'>
            <h2 className="text-3xl my-4 font-bold card-title">
                Latest Repositories
            </h2>
            {repos.map((repo) => (
                <RepoItem key={repo.id} repos={repos} />
            ))}
        </div>
    </div>
  )
}

RepoList.propTypes = {
    repos : PropType.array.isRequired
}

export default RepoList