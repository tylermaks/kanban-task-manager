import { useState } from "react"
import boardIcon from "../assets/icon-board.svg"

function AllBoards(){
    const [activeBoard, setActiveBoard] = useState()
    const allBoardsNum = 0

    return <section id="board-menu" className="flex-column gap--1">
        <h4>{`All Boards (${allBoardsNum})`}</h4>
        <div className="board-option flex-row">
            <img src={boardIcon} alt="Board icon" />
            <h3>Platform Launch</h3>
        </div>
        <div className="board-option board-option--create flex-row">
            <img src={boardIcon} alt="Board icon" />
            <h3>+ Create New Board</h3>
        </div>
    </section>
}

export default AllBoards
