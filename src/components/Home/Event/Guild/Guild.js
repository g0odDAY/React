import useHttp from "../../../../hooks/use-http";
import {useEffect, useState} from "react";
import classes from './Guild.module.css'
const Guild = () => {
    const {sendRequest} = useHttp();
    const [guild, setGuild] = useState([]);
    const [serverName, setServerName] = useState('루페온');
    const [page, setPage] = useState({
        pageNo: 1,
        pageSize: 5,
        totalSize: ''
    });
    useEffect(() => {
        sendRequest({
            url: `https://developer-lostark.game.onstove.com/guilds/rankings?serverName=${serverName}`,
            headers: {
                accept: 'application/json',
                authorization: process.env.REACT_APP_LOSTARK_API_KEY
            }
        }).then(res => {
            setPage((prev) => ({
                ...prev,
                totalSize: res.length
            }))
            const paging = res.filter(data => data.Rank <= page.pageNo * page.pageSize && data.Rank > page.pageNo * page.pageSize - 5);
            setGuild(paging)
        });
    }, [page.pageNo,page.pageSize, serverName,sendRequest])
    const btn = (number) => {
        setPage((prev) => ({
            ...prev,
            pageNo: prev.pageNo + number
        }))
    }
    const guildHandler = (e)=>{
        setPage((prev) => ({
            ...prev,
            pageNo: 1
        }))
        setServerName(e.target.value);
    }
    return <div>
        <div className={classes.select_btn}>
            <select onChange={guildHandler}>
                <option value="루페온">루페온</option>
                <option value="카마인">카마인</option>
                <option value="아브렐슈드">아브렐슈드</option>
                <option value="카제로스">카제로스</option>
                <option value="아만">아만</option>
                <option value="실리안">실리안</option>
                <option value="니나브">니나브</option>
                <option value="카단">카단</option>
            </select>
        </div>
        <table className={classes.guild_table}>
            <thead>
                <tr>
                    <th>길드명</th>
                    <th>메세지</th>
                </tr>
            </thead>
            <tbody>
            {guild.map((guild, idx) => {
                return <tr key={idx}>
                    <td>{guild.GuildName}</td>
                    <td className={classes.guild_message}>{guild.GuildMessage?guild.GuildMessage:'-'}</td>
                </tr>
            })}
            </tbody>
        </table>
        <div className={classes.indicator_btn}>
            <button type='button' disabled={page.pageNo === 1} onClick={() => btn(-1)}>prev</button>
            <span>{page.pageNo}/{Math.ceil(page.totalSize / page.pageSize)}</span>
            <button type='button' disabled={Math.ceil(page.totalSize / page.pageSize) === page.pageNo}
                    onClick={() => btn(1)}>next
            </button>
        </div>
    </div>
}
export default Guild;