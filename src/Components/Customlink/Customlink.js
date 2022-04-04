import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';
const Customlink = ({name,to,icon,...props}) => {
    let resolved = useResolvedPath(to);

    let match = useMatch({
        path:resolved.pathname,end:true
    })
    return (
        <Link
         to={to}
         {...props}
         className={match?'text-orange-400':'text-white'}
        >
        <div>
            {/* single link */}
            <div className='flex gap-x-4 items-center overflow-hidden pl-2 py-5 cursor-pointer hover:bg-blue-600'>
                  {/* link Icon */}
                  <div>
                    <div className=''>
                        {icon}
                    </div>
                  </div>
                  {/* link name */}
                  <div>
                        <h1 className='text-xl uppercase  ml-4'>{name}</h1>   
                  </div>
              </div>
        </div>
        </Link>
    );
};

export default Customlink;