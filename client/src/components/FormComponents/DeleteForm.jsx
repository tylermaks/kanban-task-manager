function DeleteForm({ data, toggleModal }){
    console.log(data)

    const warningMsg = data ? `${data.title} task and its subtasks` : `${data.name} board`

    return(
        <div className="flex-column gap--2">
            <p>{`Are you sure what want to delete the ${warningMsg}? This action cannot be reversed`}</p>
            <div className="flex-row flex-row--space gap--1">
                <div className="button button--lg button__destructive">
                    Delete
                </div>
                <div onClick={toggleModal} className="button button--lg button__secondary button__secondary--lt">
                    Cancel
                </div>
            </div>
        </div>
    )
}

export default DeleteForm