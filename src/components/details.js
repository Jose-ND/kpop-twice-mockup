import React from 'react'

const Details = (props) => {

    const renderChildren = () => {
        const { links, info } = props;
        let children = [];
        if(links) {
            children = links.map(link => {
                return <a key={link._id} onClick={link.onClick} className='details__link'>{link.title}</a>
            })
        } else if(info) {
            children = info.map(item => {
                return <div key={item._id} className='details__item'>{item.title}</div>
            })
        }
        return children;
    }

    return (
        <div className={`${props.className} details`}>
            <div className='details__title'>{props.title}</div>
            <div className='details__links'>
                {renderChildren()}
            </div>
        </div>
    )
}

export default Details;
