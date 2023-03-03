import React, { useState } from 'react';
import Imagem from './Imagem';
import Inferior from './Inferior';
import ListaPerguntas from './ListaPerguntas';
import cards from './cards';

export default function App() {
  const [cardsValue, setCardsValue] = useState(cards);
  
  function handleQuestionComplete(index) {
    const newCardsValue = [...cardsValue];
    newCardsValue[index].completed = true;
    setCardsValue(newCardsValue);
  }
  
  const completedQuestions = cardsValue.filter(question => question.completed).length;
  
  return (
    <>
      <Imagem />
      <ListaPerguntas cards={cardsValue} onQuestionComplete={handleQuestionComplete} />
      <Inferior nperguntas={cardsValue.length} completedQuestions={completedQuestions} />
    </>
  );
}