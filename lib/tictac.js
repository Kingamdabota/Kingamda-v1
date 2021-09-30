const { color, bgcolor } = require('./color');
const { isTicTacToe, getPosTic, KeisiSemua, cekIsi, cekTicTac } = require('./tictactoe');

module.exports = async (chats, prefix, tictactoe, from, sender, reply, mentions) => {
    try {
        // TicTacToe
        if (isTicTacToe(from, tictactoe)){
            let nomor = [1, 2, 3, 4, 5, 6, 7, 8, 9]
            let posi = tictactoe[getPosTic(from, tictactoe)]
            let anu = posi.TicTacToe
            if (posi.status === null){
                if (sender === posi.ditantang){
                    if (chats.toLowerCase() === 'y'){
                        mentions(`@${posi.ditantang.split('@')[0]} accept the challenge

@${posi.penantang.split('@')[0]} = ❎
@${posi.ditantang.split('@')[0]} = ⭕

    ${anu[0]}${anu[1]}${anu[2]}
    ${anu[3]}${anu[4]}${anu[5]}
    ${anu[6]}${anu[7]}${anu[8]}
    
Turn @${posi.penantang.split('@')[0]}`, [posi.penantang, posi.ditantang], false)
                        tictactoe[getPosTic(from, tictactoe)].status = true 
                    } else if (chats.toLowerCase() === 't'){
                        mentions(`Yah @${posi.ditantang.split('@')[0]} rejected \ nSubmit ${prefix}titactoe @tag`, [posi.ditantang], false)
                        tictactoe.splice(getPosTic(from, tictactoe), 1)
                    }
                }
            } else if (posi.status === true){
                if (sender === posi.penantang){
                    for (let i of nomor){
                        if (Number(chats) === i){
                            if (cekIsi(Number(chats) - 1, anu)) return reply(`The number is already filled`)
                            tictactoe[getPosTic(from, tictactoe)].TicTacToe[Number(chats) - 1] = '❎'
                            if (cekTicTac(tictactoe[getPosTic(from, tictactoe)].TicTacToe)){
                                mentions(`@${posi.penantang.split('@')[0]} Win

@${posi.penantang.split('@')[0]} = ❎
@${posi.ditantang.split('@')[0]} = ⭕

    ${anu[0]}${anu[1]}${anu[2]}
    ${anu[3]}${anu[4]}${anu[5]}
    ${anu[6]}${anu[7]}${anu[8]}

Want to play again? ${prefix}tictactoe`, [posi.penantang, posi.ditantang], false)
                                tictactoe.splice(getPosTic(from, tictactoe), 1)
                            } else if (KeisiSemua(anu)) {
                                mentions(`Draw result

@${posi.penantang.split('@')[0]} = ❎
@${posi.ditantang.split('@')[0]} = ⭕

    ${anu[0]}${anu[1]}${anu[2]}
    ${anu[3]}${anu[4]}${anu[5]}
    ${anu[6]}${anu[7]}${anu[8]}

Want to play again? ${prefix}tictactoe`, [posi.penantang, posi.ditantang], false)
                                tictactoe.splice(getPosTic(from, tictactoe), 1)
                            } else {
                                mentions(`@${posi.penantang.split('@')[0]} has filled

@${posi.penantang.split('@')[0]} = ❎
@${posi.ditantang.split('@')[0]} = ⭕

    ${anu[0]}${anu[1]}${anu[2]}
    ${anu[3]}${anu[4]}${anu[5]}
    ${anu[6]}${anu[7]}${anu[8]}
    
Turn @${posi.ditantang.split('@')[0]}`, [posi.penantang, posi.ditantang], false)
                                tictactoe[getPosTic(from, tictactoe)].status = false
                                 
                            }
                        }
                    }
                }
            } else if (posi.status === false){
                if (sender === posi.ditantang){
                    for (let i of nomor){
                        if (Number(chats) === i){
                            if (cekIsi(Number(chats) - 1, anu)) return reply(`The number is already filled`)
                            tictactoe[getPosTic(from, tictactoe)].TicTacToe[Number(chats) - 1] = '⭕' 
                            if (cekTicTac(anu)){
                                mentions(`@${posi.ditantang.split('@')[0]} Win

@${posi.penantang.split('@')[0]} = ❎
@${posi.ditantang.split('@')[0]} = ⭕

    ${anu[0]}${anu[1]}${anu[2]}
    ${anu[3]}${anu[4]}${anu[5]}
    ${anu[6]}${anu[7]}${anu[8]}

Want to play again? ${prefix}tictactoe`, [posi.penantang, posi.ditantang], false)
                                tictactoe.splice(getPosTic(from, tictactoe), 1)
                            } else if (KeisiSemua(anu)) {
                                mentions(`Draw result

@${posi.penantang.split('@')[0]} = ❎
@${posi.ditantang.split('@')[0]} = ⭕

    ${anu[0]}${anu[1]}${anu[2]}
    ${anu[3]}${anu[4]}${anu[5]}
    ${anu[6]}${anu[7]}${anu[8]}

Want to play again? ${prefix}tictactoe`, [posi.penantang, posi.ditantang], false)
                                tictactoe.splice(getPosTic(from, tictactoe), 1)
                            }else {
                                mentions(`@${posi.ditantang.split('@')[0]} has filled

@${posi.penantang.split('@')[0]} = ❎
@${posi.ditantang.split('@')[0]} = ⭕

    ${anu[0]}${anu[1]}${anu[2]}
    ${anu[3]}${anu[4]}${anu[5]}
    ${anu[6]}${anu[7]}${anu[8]}
    
Turn @${posi.penantang.split('@')[0]}`, [posi.penantang, posi.ditantang], false)
                                tictactoe[getPosTic(from, tictactoe)].status = true
                            }
                        }
                    }
                }
            }
        }
    } catch (err){
        console.log(color('[ERROR]', 'red'), err)
    }
}