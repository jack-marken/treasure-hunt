import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { RiTreasureMapFill } from "react-icons/ri";
import { MdOutlineQuestionMark } from "react-icons/md";
import { FaLock, FaCaretLeft, FaCaretRight } from "react-icons/fa6";
import { FaCheckCircle } from "react-icons/fa";

type TaskProps = {
  sequence: string;
  mainText: string;
  bodyText: string;
  link: string;
  hintText: string;
  password: string;
  correctAnswer: string;
  answerText: string;
  tasksLength: number;
  lockedArr: boolean[];
  completedArr: boolean[];
  toggleLocked: () => void;
  toggleCompleted: () => void;
}

export default function Task( {sequence, mainText, bodyText, link, hintText, password, correctAnswer, answerText, tasksLength, lockedArr, completedArr, toggleLocked, toggleCompleted}: TaskProps ) {
  const [isLocked, setIsLocked] = useState<boolean>(true);
  const [isCompleted, setIsCompleted] = useState<boolean>(true);
  const [pwd, setPwd] = useState<string>('');
  const [pwdPromptShowing, setPwdPromptShowing] = useState<boolean>(false);
  const [answer, setAnswer] = useState<string>('');
  const [answerPromptShowing, setAnswerPromptShowing] = useState<boolean>(false);
  const [hintShowing, setHintShowing] = useState<boolean>(false);

  useEffect(() => {
    if (lockedArr[parseInt(sequence)]) {
      setIsLocked(true);
    } else {
      setIsLocked(false);
    }
    if (completedArr[parseInt(sequence)]) {
      setIsCompleted(true);
    } else {
      setIsCompleted(false);
    }
  });

  const validatePwd = () => {
    setPwdPromptShowing(false);
    console.log(pwd);
    if (pwd.toLowerCase() == password.toLowerCase()) {
      toggleLocked();
    }
    setPwd('');
  }

  const validateAnswer = () => {
    setAnswerPromptShowing(false);
    console.log(correctAnswer);
    if (correctAnswer.toLowerCase() == answer.toLowerCase()) {
      toggleCompleted();
    }
    setAnswer('');
  }
  return (
    <div className={`h-dvh ${isLocked ? 'bg-gray-400' : 'bg-emerald-100'}`}>
      <header className="fixed top-8 right-8 left-8 text-white text-4xl">
        <ul className="flex justify-between">
          <li><Link to="/tasks"><RiTreasureMapFill /></Link></li>
          <li>{sequence}/{tasksLength}</li>
          <li><button onClick={() => !isLocked ? setHintShowing(!hintShowing) : null}><MdOutlineQuestionMark /></button></li>
        </ul>
      </header>

      <div className={`flex flex-col p-8 h-dvh items-center justify-center text-center text-white ${isLocked ? 'bg-gray-400' : isCompleted ? 'bg-emerald-700' : 'bg-sky-600'}`}>
        {isLocked &&
        <FaLock className="relative text-5xl" />
        }
        {!isLocked && <h1 className="text-4xl">{mainText}</h1>}
        {!isLocked && bodyText && <p className="p-3 border-t mt-4 text-xl">{bodyText}</p>}
        {!isLocked && link && <a className="p-3 mt-4 bg-white rounded-md text-black wrap-anywhere" href={link}>{link}</a>}
        {!isLocked && isCompleted && answerText && <p className="p-3 border-t mt-4 text-xl">{answerText}</p>}
      </div>

      {/* {!isLocked && isCompleted && completedText && <p className="p-3 border-t mt-4 text-xl">{bodyText}</p>} */}

      <div className="fixed flex right-8 bottom-8 left-8">
        <div className="flex w-full justify-center">
        <Link
        to={`/${parseInt(sequence) > 1 ? parseInt(sequence) - 1 : parseInt(sequence)}`}
        className="w-12 flex-grow relative -left-1 flex items-center justify-center h-16 rounded-l-md bg-gray-200 text-xl shadow-solid active:shadow-none active:bg-gray-300 active:-bottom-3 active:left-1"
        >
          <FaCaretLeft />
        </Link>
      {!isLocked && !isCompleted &&
        <button onClick={() => !isCompleted ? setAnswerPromptShowing(true) : null} className="basis-3/4 relative -left-1 flex items-center justify-center h-16 bg-gray-200 text-xl shadow-solid active:shadow-none active:bg-gray-300 active:-bottom-3 active:left-1">
          {/* <FaLock/> */}
          <div>I've got it</div>
        </button>
      }
      {!isLocked && isCompleted &&
        <button onClick={() => toggleCompleted()} className="basis-3/4 relative -left-1 flex items-center justify-center h-16 bg-gray-200 text-xl shadow-solid active:shadow-none active:bg-gray-300 active:-bottom-3 active:left-1">
          <FaCheckCircle className="text-emerald-700 mx-2" />
          <div>DONE</div>
        </button>
      }
      {isLocked &&
        <button onClick={() => isLocked ? setPwdPromptShowing(!pwdPromptShowing) : null} className="basis-3/4 relative -left-1 flex items-center justify-center h-16 bg-gray-200 text-xl shadow-solid active:shadow-none active:bg-gray-300 active:-bottom-3 active:left-1">
          PASSWORD
        </button>
      }
        <Link
        to={`/${parseInt(sequence) < tasksLength ? parseInt(sequence) + 1 : parseInt(sequence)}`}
        className="w-12 flex-auto relative -left-1 flex items-center justify-center h-16 rounded-r-md bg-gray-200 text-xl shadow-solid active:shadow-none active:bg-gray-300 active:-bottom-3 active:left-1"
        >
          <FaCaretRight />
        </Link>
        </div>
      </div>

      {!isLocked && hintShowing &&
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-start justify-center p-4 text-center sm:items-center sm:p-0">
            <div className="w-full overflow-hidden rounded-lg text-center shadow-xl sm:my-8 sm:w-full sm:max-w-lg">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <p className="text-lg text-gray-500">{hintText}</p>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                <button onClick={() => setHintShowing(false)} className="mt-2 inline-flex w-full justify-center rounded-md bg-gray-100 px-3 py-2 text-md font-semibold text-stone-900 shadow-xs border-stone-300 border-dashed border-2 hover:bg-stone-50 sm:mt-0 sm:w-auto">Close</button>
              </div>
            </div>
          </div>
        </div>
      }

      {isLocked && pwdPromptShowing &&
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <form>
              <div className="w-full overflow-hidden rounded-lg text-center shadow-xl">
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <input type="text" id="password" autoComplete="off" onChange={(e) => setPwd(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" autoFocus required />
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                  <button type="submit" onClick={() => validatePwd()} className="mt-2 inline-flex w-full justify-center rounded-md bg-sky-200 px-3 py-2 text-md font-semibold text-stone-900 shadow-xs border-stone-300 border-dashed border-2 hover:bg-yellow-300">Check</button>
                </div>
                <div className="bg-gray-50 px-4 py-3 pb-5 sm:flex sm:flex-row-reverse sm:px-6">
                  <button onClick={() => {setPwd(''); setPwdPromptShowing(false);}} className="inline-flex w-full justify-center rounded-md bg-gray-100 px-3 py-2 text-md font-semibold text-stone-900 shadow-xs border-stone-300 border-dashed border-2 hover:bg-stone-50">Cancel</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      }

      {!isCompleted && answerPromptShowing &&
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <form>
              <div className="w-full overflow-hidden rounded-lg text-center shadow-xl">
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <input type="text" id="password" autoComplete="off" onChange={(e) => setAnswer(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" autoFocus required />
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                  <button type="submit" onClick={() => validateAnswer()} className="mt-2 inline-flex w-full justify-center rounded-md bg-emerald-400 px-3 py-2 text-md font-semibold text-stone-900 shadow-xs border-emerald-600 border-dashed border-2 hover:bg-emerald-300">Check</button>
                </div>
                <div className="bg-gray-50 px-4 py-3 pb-5 sm:flex sm:flex-row-reverse sm:px-6">
                  <button onClick={() => {setAnswer(''); setAnswerPromptShowing(false);}} className="inline-flex w-full justify-center rounded-md bg-gray-100 px-3 py-2 text-md font-semibold text-stone-900 shadow-xs border-stone-300 border-dashed border-2 hover:bg-stone-50">Cancel</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      }
    </div>
  );
}
