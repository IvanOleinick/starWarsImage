const Friends = ({ friend, isExpanded, onClick }) => {
    return (
        <div
            onClick={onClick}
            className={`
        ${isExpanded ? 'absolute  z-10 w-full h-full' : 'w-full h-full'}
        cursor-pointer
      `}
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
