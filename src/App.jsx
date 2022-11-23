/* eslint react-hooks/exhaustive-deps :off */

import React, { useEffect, useState } from "react";
import { ColorfulMessage } from "./components/ColorfulMessage";

const App = () => {
  //[変数、更新する関数] = 初期値の設定
  const [num, setNum] = useState(0);
  const [faceShowFlag, setFaceShowFlag] = useState(false);

  const onClickCountUp = () => {
    setNum(num + 1);
  };
  const onClickSwitchShowFlag = () => {
    setFaceShowFlag(!faceShowFlag);
  };

  useEffect(() => {
    //最初のレンダリングの時だけ走らせたい処理をここへ記述する
    //useEffectの第二引数の配列内に変数を設定すると、その変数が変化した時も、useEffect内で処理が走る
    if (num > 0) {
      //もしnumが３で割って余りが０の時（３の倍数の時）
      if (num % 3 === 0) {
        //faceShowFlagがtrueであろうとfalseであろうとsetShowFlagはtrue判定
        faceShowFlag || setFaceShowFlag(true);
      } else {
        //3の倍数じゃない時はfalseを返すようにする
        faceShowFlag && setFaceShowFlag(false);
      }
    }
  }, [num]);
  console.log("レンダリングしたよ");

  return (
    <>
      <h1 style={{ color: "red" }}>こんちは</h1>
      <ColorfulMessage color="blue">お元気ですか</ColorfulMessage>
      <ColorfulMessage color="pink">お元気ですか</ColorfulMessage>
      <button onClick={onClickCountUp}>カウントアップ</button>
      <br />
      <button onClick={onClickSwitchShowFlag}>on/off</button>
      <p>{num}</p>
      {faceShowFlag && <p>( `α`)</p>}
    </>
  );
};

//他のファイルでApp関数を利用できる宣言
export default App;
