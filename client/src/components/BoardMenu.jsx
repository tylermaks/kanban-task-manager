import useBoard from "../hook/useBoard"
import boardIcon from "../assets/icon-board.svg"
import data from "../data.json"
import "../styles/menu-nav.scss"

function BoardMenu(){
    const { selectedBoard, handleBoardToggle } = useBoard()
    const allBoardsNum = data?.boards.length

    console.log(selectedBoard)
    return <section id="board-menu" className="flex-column gap--1">
        <h4>{`All Boards (${allBoardsNum})`}</h4>
        {
            data && data.boards.map((board, id) => {
                return(
                    <div 
                        key={id} 
                        id={id} 
                        className={selectedBoard === id 
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

        <div className="board-option board-option--create flex-row">
            <img src={boardIcon} alt="Board icon" />
            <h3>+ Create New Board</h3>
        </div>
    </section>
}

export default BoardMenu
