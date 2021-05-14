import React from 'react'

const PageTitle = (props) => {
    const { className, title } = props;
    return (
        <div className={`${className} page-title`}>{title}</div>
    )
}

export default PageTitle;
