import React from 'react';
import writings from '../writings.module.css'

const Writings = () => {
    return (
        <>
            <h1>卒業アルバム</h1>
            <table border='1' className={writings.tbl} >
                <tr ><th className={writings.name_goal}>氏名</th>
                    <th className={writings.name_goal}>目標</th>
                    <th className={writings.impressions}>全授業を通しての感想</th></tr>
                <tr><td>鎌田希望</td>
                    <td>エンジニア転職</td>
                    <td className={writings.impression}>私の中でスクールに通う意義は「挫折しない環境づくり」と「体系的・効率的に学べること」でした。実際は期待していた通りで、さらに共に頑張る仲間と出会えたことで刺激を受け、できることが増えてきて自信がつきました。今後はさらに技術を磨きエンジニアとしての人生をスタートさせたいです。</td></tr>
                <tr><td>高野大梧</td>
                    <td>目標</td>
                    <td className={writings.impression}>感想</td></tr>
                <tr><td>ファムフォンタオ</td>
                    <td>エンジニア就職</td>
                    <td className={writings.impression}>期間は長いようで意外と短く感じました。HTML＆cssから始まり今ではgitを使ってチーム開発をしているなんて当時は考えられなかったです。独学だけでは学べないような事も一緒に学べることができて、このスクールに入ってよかったです。</td></tr>
            </table>
        </>
    )
}
export default Writings