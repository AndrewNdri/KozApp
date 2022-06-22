import "./message.css";

export default function Message({own}) {
  return (
    <div className={own ? "message own" : "message"}>
      <div className="messageTop">
        <img className="messageImg" src="" alt="" />
        <p className="messageText">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius quod amet perspiciatis fugiat corporis iste tenetur!</p>
      </div>
      <div className="messageBottom">1 hour ago</div>
    </div>
  );
}
