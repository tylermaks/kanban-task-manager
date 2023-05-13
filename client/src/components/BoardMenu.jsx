import useBoardData from "../hook/useBoardData"
import boardIcon from "../assets/icon-board.svg"
import "../styles/menu-nav.scss"

function BoardMenu({ toggleModal }){
    const { activeBoard, boards, handleBoardToggle } = useBoardData()

    //tesing appData --- replace with boardList if unsuccessful

    return <section id="board-menu" className="flex-column gap--1">
        <h4>{`All Boards (${boards?.length})`}</h4>  
        {
            boards && boards.map((board, id) => {
                return(
                    <div 
                        key={id} 
                        id={id} 
                        className={activeBoard === id 
                            ? "board-option board-option--active flex-row"
                            : "board-option flex-row" 
                        }
                        onClick={() => handleBoardToggle(id)}
                    >

                        <img src={boardIcon} alt="Board icon" />
                        <h3>{board.name}</h3>
                    </div>
                )
            })
        }
        <div onClick={() => toggleModal("addBoard")} className="board-option board-option--create flex-row">
            <img src={boardIcon} alt="Board icon" />
            <h3>+ Create New Board</h3>
        </div>
    </section>
}

export default BoardMenu
