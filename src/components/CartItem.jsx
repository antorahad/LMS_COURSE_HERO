const CartItem = ({ singleCartItem }) => {
    const { image, title, price } = singleCartItem;

    return (
        <div className="flex items-center gap-5 w-[100%] p-5 bg-slate-50 shadow-sm rounded-[5px]">
            <div className="flex items-center gap-5">
                <img src={image} className="w-[30%] rounded-[5px]" alt={title} />
                <div className="flex flex-col gap-5">
                    <h1 className="text-[20px] font-[600]">{title}</h1>
                    <p className="text-[14px] font-[600]">${price}</p>
                </div>
            </div>
        </div>
    );
};

export default CartItem;
