const Button = ({ text, color = 'black' }) => {
  return (
    <button
      onClick={() => {
        console.log('버튼이 클릭되었습니다.');
        alert('버튼이 클릭되었습니다.');
      }}
      style={{ color: color }}
    >
      {text}
    </button>
  );
};

export default Button;
