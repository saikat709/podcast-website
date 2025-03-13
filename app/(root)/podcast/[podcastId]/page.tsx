import React from "react";

const PostCastDetails = ( { params }: { params: { postcastId : String } } ) => {
    return (
        <div className='mt-9 flex flex-col gap-9'>
            <section className='flex flex-col gap-5'>
                <h1 className='text-white-1 text-20 font-bold'> Podcast Details </h1>
            </section>
        </div>
    );
}

export default PostCastDetails;