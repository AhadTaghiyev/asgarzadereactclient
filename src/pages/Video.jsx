import React from 'react'
import { Helmet } from 'react-helmet-async'
import { useParams } from 'react-router-dom'
import VideosContent from '../components/Main/Videos'

const Video = () => {
    const { id } = useParams();
    return (
        <>
            <Helmet>
                <title>Video | Music School</title>
                <meta name='description' content='It is about Video page of Music School' />
            </Helmet>
            <VideosContent id={id} />
        </>
    )
}

export default Video
