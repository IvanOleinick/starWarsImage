const Friends = ({friend, index, indexImage, onClick}) => {
    return (
        <div
            onClick={onClick}
            className={`${
                indexImage === index
                    ? 'absolute  z-10 w-full h-full'
                    : 'w-full h-full'
            } cursor-pointer`}
        >
            <img
                src={friend}
                alt="Friend"
                className="w-full h-full "
            />
        </div>
    );
};

export default Friends;



//второй вариант
// const Friends = ({ friend, index, indexImage, onClick }) => {
//     let className = 'w-full h-full cursor-pointer';
//
//     if (indexImage === index) {
//         className = 'absolute inset-0 z-10 w-full h-full cursor-pointer';
//     }
//
//     return (
//         <div onClick={onClick} className={className}>
//             <img
//                 src={friend}
//                 alt="Friend"
//                 className="w-full h-full rounded"
//             />
//         </div>
//     );
// };
//
// export default Friends;
//
