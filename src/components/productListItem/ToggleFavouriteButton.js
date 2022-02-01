import { memo } from 'react'
import { useSelector } from 'react-redux'

const ToggleFavouriteButton = ({onToggleFavourite, id}) => {
    const favourite = useSelector((state) => {
        const product = state.products.products.find(item => item.id === id)
        return product.favourite
    })

    const buttonClass = favourite ? 'product__button product__button--active' : 'product__button';
    return (
        <>
            <button className={buttonClass}
                    onClick={(event) => onToggleFavourite(event, id)}>
                       
                       <svg className="product__button-img--favourite"
                            xmlns="http://www.w3.org/2000/svg" 
                            width="24" height="24"
                            viewBox="0 0 24 24">
                                <path d="M12 9.229c.234-1.12 1.547-6.229 5.382-6.229 2.22 0 4.618 1.551 4.618 5.003 0 3.907-3.627 8.47-10 12.629-6.373-4.159-10-8.722-10-12.629 0-3.484 2.369-5.005 4.577-5.005 3.923 0 5.145 5.126 5.423 6.231zm-12-1.226c0 4.068 3.06 9.481 12 14.997 8.94-5.516 12-10.929 12-14.997 0-7.962-9.648-9.028-12-3.737-2.338-5.262-12-4.27-12 3.737z"/>
                            </svg>
                    </button>
        </>
    )
}

export default memo(ToggleFavouriteButton)