import React from 'react';
import {FaCodepen, FaStore, FaUserFriends, FaUsers, FaLink, FaEye, FaStar, FaUtensils, FaInfo} from 'react-icons/fa';
import PropTypes from 'prop-types';

function RepoItem({repos}) {

    const {
        name, 
        description,
        html_url,
        forks,
        open_issues,
        watchers_count,
        stargazers_count
    } = repos
  return (
    <div className='mb-2 rounded-md card bg-gray-800 hover:bg-gray-900'>
        <div className="card-body">
            <h3 className="mb-2 text-xl font-semibold">
                <a href={html_url}>
                    <FaLink className='inline mr-1'>{name}</FaLink>
                </a>
            </h3>
            <p className="mb-3">{description}</p>
            <div>
                <div className="mr-2 badge-info badge-lg">
                    <FaEye className='mr-2'/>{watchers_count}
                </div>
                <div className="mr-2 badge-info badge-lg">
                    <FaStar className='mr-2'/>{stargazers_count}
                </div>
                <div className="mr-2 badge-info badge-lg">
                    <FaInfo className='mr-2'/>{open_issues}
                </div>
                <div className="mr-2 badge-info badge-lg">
                    <FaUtensils className='mr-2'/>{forks}
                </div>
            </div>
        </div>
    </div>
  )
}

RepoItem.propTypes = {
    repos : PropTypes.object.isRequired
}

export default RepoItem;