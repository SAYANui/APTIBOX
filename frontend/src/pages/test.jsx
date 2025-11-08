import React, { useState } from 'react'
import { FaArrowLeft } from "react-icons/fa";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from 'react-icons/md';
import { Button } from '../components/ui/button';
import { Checkbox } from '../components/ui/checkbox';
import { Field, FieldContent, FieldDescription, FieldGroup, FieldLabel, FieldLegend, FieldSeparator, FieldSet } from '../components/ui/field';

const Test = () => {
  const [questions, setQuestions] = useState([
    {
      id: 1,
      question: "Which of the following items can be displayed on the Desktop?",
      options: [
        { id: "finder-pref-9k2-hard-disks-ljj", label: "Hard disks", checked: false },
        { id: "finder-pref-9k2-external-disks-1yg", label: "External disks", checked: false },
        { id: "finder-pref-9k2-cds-dvds-fzt", label: "CDs, DVDs, and iPods", checked: false },
        { id: "finder-pref-9k2-connected-servers-6l2", label: "Connected servers", checked: false },
      ],
    },
    {
      id: 2,
      question: "What is the default file format for saving documents in most word processors?",
      options: [
        { id: "option-docx", label: "DOCX", checked: true },
        { id: "option-pdf", label: "PDF", checked: false },
        { id: "option-txt", label: "TXT", checked: false },
        { id: "option-rtf", label: "RTF", checked: false },
      ],
    },
    {
      id: 3,
      question: "Which of the following is NOT a programming language?",
      options: [
        { id: "option-html", label: "HTML", checked: true },
        { id: "option-css", label: "CSS", checked: false },
        { id: "option-javascript", label: "JavaScript", checked: false },
        { id: "option-python", label: "Python", checked: false },
      ],
    },
    {
      id: 4,
      question: "Which of the following is a front-end JavaScript framework?",
      options: [
        { id: "option-react", label: "React", checked: true },
        { id: "option-django", label: "Django", checked: false },
        { id: "option-flask", label: "Flask", checked: false },
        { id: "option-spring", label: "Spring", checked: false },
      ],
    },
    {
      id: 5,
      question: "What does CSS stand for?",
      options: [
        { id: "option-cascading-style-sheets", label: "Cascading Style Sheets", checked: true },
        { id: "option-computer-style-sheets", label: "Computer Style Sheets", checked: false },
        { id: "option-colorful-style-sheets", label: "Colorful Style Sheets", checked: false },
        { id: "option-creative-style-sheets", label: "Creative Style Sheets", checked: false },
      ],
    },
    {
      id: 6,
      question: "Which HTML tag is used to define an internal style sheet?",
      options: [
        { id: "option-style", label: "<style>", checked: true },
        { id: "option-script", label: "<script>", checked: false },
        { id: "option-css", label: "<css>", checked: false },
        { id: "option-head", label: "<head>", checked: false },
      ],
    },
    {
      id: 7,
      question: "Which of the following is a NoSQL database?",
      options: [
        { id: "option-mongodb", label: "MongoDB", checked: true },
        { id: "option-mysql", label: "MySQL", checked: false },
        { id: "option-postgresql", label: "PostgreSQL", checked: false },
        { id: "option-sqlite", label: "SQLite", checked: false },
      ],
    },
    {
      id: 8,
      question: "What does API stand for?",
      options: [
        { id: "option-application-programming-interface", label: "Application Programming Interface", checked: true },
        { id: "option-advanced-programming-interface", label: "Advanced Programming Interface", checked: false },
        { id: "option-application-performance-interface", label: "Application Performance Interface", checked: false },
        { id: "option-automated-programming-interface", label: "Automated Programming Interface", checked: false },
      ],
    },
    {
      id: 9,
      question: "Which of the following is NOT a version control system?",
      options: [
        { id: "option-git", label: "Git", checked: false },
        { id: "option-svn", label: "SVN", checked: false },
        { id: "option-mercurial", label: "Mercurial", checked: false },
        { id: "option-docker", label: "Docker", checked: true },
      ],
    },
    {
      id: 10,
      question: "Which of the following is a popular front-end build tool?",
      options: [
        { id: "option-webpack", label: "Webpack", checked: true },
        { id: "option-docker", label: "Docker", checked: false },
        { id: "option-kubernetes", label: "Kubernetes", checked: false },
        { id: "option-jenkins", label: "Jenkins", checked: false },
      ],
    }
  ]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <section>
      <div className='p-3 flex items-center gap-3'>
        <Button variant="ghost" size="icon" aria-label="Submit">
          <FaArrowLeft />
        </Button>
        <h3 className='text-lg font-medium'>Test</h3>
      </div>
      <div className='flex flex-col justify-center items-center h-[80vh] p-6'>
        {questions.length > 0 && (
          <div key={questions[currentQuestionIndex].id} className="w-full max-w-md">
            <FieldGroup>
              <FieldSet>
                <FieldLegend variant="label">
                  Q{currentQuestionIndex + 1}. {questions[currentQuestionIndex].question}
                </FieldLegend>
                <FieldDescription>
                  Select the correct answer of the following question.
                </FieldDescription>
                <FieldGroup className="gap-3">
                  {questions[currentQuestionIndex].options.map((option) => (
                    <Field orientation="horizontal">
                      <Checkbox id={option.id} />
                      <FieldLabel
                        htmlFor={option.id}
                        className="font-normal"
                        defaultChecked={option.checked}
                      >
                        {option.label}
                      </FieldLabel>
                    </Field>
                  ))}
                </FieldGroup>
              </FieldSet>
              <Field orientation="horizontal" className="justify-between">
                <Button variant="outline" size="sm" className="shadow-md" onClick={handlePreviousQuestion} disabled={currentQuestionIndex === 0}>
                  <MdKeyboardArrowLeft /> Previous
                </Button>
                {currentQuestionIndex < questions.length - 1 && (
                  <Button size="sm" className="bg-[#328aff] text-white hover:bg-[#1e9aff] shadow-md" onClick={handleNextQuestion}>
                    Next <MdKeyboardArrowRight />
                  </Button>
                )}
                {currentQuestionIndex === questions.length - 1 && (
                  <Button type="submit" size="sm" className="bg-[#328aff] text-white hover:bg-[#1e9aff] shadow-md" onClick={handleSubmit}>
                    Submit
                  </Button>
                )}
              </Field>
            </FieldGroup>
          </div>
        )}
      </div>
    </section>
  )
}

export default Test
