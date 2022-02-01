import boxJpg from '../../assets/empty-box.jpg';

const EmptyFavouriteList = () => {

    return (
        <div className="favourite-list__empty">

            <img className="favourite-list__img" src={boxJpg} alt="empty box"/>
            <p className="favourite-list__text">
                You have not added any product to your favorites yet.
            </p>
        </div>
    )
}

export default EmptyFavouriteList