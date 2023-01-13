import React from 'react';

const ArticleCard = () => {

    const data = {
        title: "Title",
        content: ['Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi consequatur dolor doloremque earum error explicabo fugit, id impedit laudantium magnam minus nemo nesciunt officiis perspiciatis repellat reprehenderit sed tempore totam?', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi consequatur dolor doloremque earum error explicabo fugit, id impedit laudantium magnam minus nemo nesciunt officiis perspiciatis repellat reprehenderit sed tempore totam?'],
    }
    return (
        <div className='p-5'>
            <h1 className='text-2xl font-bold mb-4'>{data?.title}</h1>
            {data?.content.map((item, i)=>
                <p key={i} className='text-gray-600 mb-4'>{item}</p>
            )}
        </div>
    );
};

export default ArticleCard;