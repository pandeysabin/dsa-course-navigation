import React, { useState, useEffect, useRef } from "react";
import "./App.css"; // Ensure this file is updated
import {
  InterChapterBottomArrow,
  InterChapterTopArrow,
  LeftArrow,
  RightArrow,
} from "./Arrows";

const App = () => {
  const chapters = [
    {
      id: "chapter-1",
      name: "Introduction",
      lessons: [
        "Introduction to DSA",
        "Why Learn DSA?",
        "Prerequisites",
        "Best Practices",
      ],
    },
    {
      id: "chapter-2",
      name: "Sorting Algorithms",
      lessons: [
        "Bubble Sort",
        "Selection Sort",
        "Insertion Sort",
        "Merge Sort",
        "Quick Sort",
        "Counting Sort",
      ],
    },
    {
      id: "chapter-3",
      name: "Search Algorithms",
      lessons: ["Linear Search", "Binary Search"],
    },
    {
      id: "chapter-4",
      name: "Linked List",
      lessons: [
        "Linked List",
        "Linked List Operations",
        "Examples: Linked List",
      ],
    },
    {
      id: "chapter-5",
      name: "Circular Linked List",
      lessons: [
        "Introduction to Circular Linked List",
        "Circular Linked List Operations",
        "Examples: Circular Linked List",
      ],
    },
    {
      id: "chapter-6",
      name: "Doubly Linked List",
      lessons: [
        "Introduction to Doubly Linked List",
        "Doubly Linked List Operations",
        "Examples: Doubly Linked List",
      ],
    },
    {
      id: "chapter-7",
      name: "Stacks and Queue",
      lessons: ["Stack", "Queue", "Double Ended Queue (Deque)"],
    },
    {
      id: "chapter-8",
      name: "Hashing",
      lessons: [
        "Introduction to Hashing",
        "Hashing Techniques",
        "Hash Collision",
        "Hash Collision Resolution",
        "Hash Functions",
        "Additional Topics",
      ],
    },
    {
      id: "chapter-9",
      name: "String Matching Algorithms",
      lessons: [
        "Introduction",
        "Brute Force Method",
        "Rabin-Karp String Matching Algorithm",
        "Knuth-Morris-Pratt (KMP) Algorithm",
      ],
    },
    {
      id: "chapter-10",
      name: "Tree Data Structure",
      lessons: [
        "Nonlinear Data Structure",
        "Tree Data Structure",
        "Implementation of Trees",
        "Tree Traversal",
      ],
    },
    {
      id: "chapter-11",
      name: "Binary Tree",
      lessons: [
        "Introduction to Binary Trees",
        "Properties of Binary Trees",
        "Implementation of Binary Trees",
        "Traversal of Binary Tree",
        "Types of Binary Trees",
        "Example: Huffman Coding",
        "Example: Binary Search Tree",
      ],
    },
    {
      id: "chapter-12",
      name: "Heaps",
      lessons: [
        "Array Representation of Binary Tree",
        "Introduction to Heaps",
        "Heapify & Heap Operations",
        "Heap Sort",
        "Heap as a Priority Queue",
      ],
    },
    {
      id: "chapter-13",
      name: "Greedy Algorithms",
      lessons: [
        "Introduction to Greedy Algorithms",
        "Classroom Scheduling Problem",
        "Coin Change Problem",
        "The Fractional Knapsack Problem",
        "0-1 Knapsack Problem",
      ],
    },
    {
      id: "chapter-14",
      name: "Graph Data Structure",
      lessons: [
        "Graph Data Structure",
        "Graph Terminologies",
        "Adjacency Matrix",
        "Adjacency List",
        "Graph Traversal With DFS Algorithm",
        "BFS Algorithm",
      ],
    },
    {
      id: "chapter-15",
      name: "Relationships in a Graph",
      lessons: [
        "Graph Connectivity",
        "Touring a Graph",
        "Graph Comparisons and Special Properties",
        "Types of Graph",
      ],
    },
    {
      id: "chapter-16",
      name: "Graph Based Algorithms",
      lessons: [
        "Graph Based Algorithms",
        "Topological Sorting",
        "Dijkstra's Algorithm",
        "Ford–Fulkerson Algorithm",
        "Spanning Trees",
        "Kruskal's Algorithm",
        "Prim's Algorithm",
      ],
    },
    {
      id: "chapter-17",
      name: "Sorting (II)",
      lessons: [
        "Additional Sorting Techniques",
        "Bucket Sort",
        "Radix Sort",
        "Shell Sort",
      ],
    },
    {
      id: "chapter-18",
      name: "Balanced Trees",
      lessons: [
        "Introduction to Balanced Trees",
        "AVL Trees",
        "Red-Black Trees",
      ],
    },
    {
      id: "chapter-19",
      name: "What's Next?",
      lessons: ["What's Next?"],
    },
  ];

  const [currentChapter, setCurrentChapter] = useState(0);
  const [currentLesson, setCurrentLesson] = useState(0);
  const [highlightedTraversal, setHighlightedTraversal] = useState(null); // Track highlighted traversal
  const [traversalDirection, setTraversalDirection] = useState(null); // Track traversal direction
  const courseContentRef = useRef(null);
  const selectedChapterRef = useRef(null);

  const [chapterTraversalDir, setChapterTraversalDir] = useState(null);

  const [isComingFromChapterToLesson, setIsComingFromChapterToLesson] =
    useState(false);

  const updateHighlightedTraversal = (targetLessonIndex, direction) => {
    setHighlightedTraversal(targetLessonIndex);
    setTraversalDirection(direction);
    setTimeout(() => {
      setHighlightedTraversal(null);
      setTraversalDirection(null);
    }, 500); // Highlight for 0.5 seconds
  };

  const goRight = () => {
    const lessons = chapters[currentChapter].lessons;
    const nextLesson = Math.min(currentLesson + 1, lessons.length - 1);

    if (currentLesson === -1 && nextLesson === 0) {
      setIsComingFromChapterToLesson(true);
    }

    setCurrentLesson(nextLesson);
    updateHighlightedTraversal(currentLesson + 1, "forward");
  };

  const goLeft = () => {
    const previousLesson = Math.max(currentLesson - 1, -1);

    if (previousLesson === -1) {
      setChapterTraversalDir(null);
    } else if (previousLesson === 0) {
      setIsComingFromChapterToLesson(false);
    }

    updateHighlightedTraversal(previousLesson, "backward");
    setCurrentLesson(previousLesson);
  };

  const goDown = () => {
    if (currentLesson >= 0) {
      return;
    }

    if (currentChapter < chapters.length - 1) {
      setCurrentChapter(currentChapter + 1);
      setChapterTraversalDir("down");
      setHighlightedTraversal(null); // Clear highlighted traversal when changing chapters
    }
  };

  const goUp = () => {
    if (currentLesson >= 0) {
      return;
    }

    if (currentChapter > 0) {
      setCurrentChapter(currentChapter - 1);
      setChapterTraversalDir("up");
      // setCurrentLesson(0);
      setHighlightedTraversal(null); // Clear highlighted traversal when changing chapters
    }
  };

  useEffect(() => {
    const ARROW_KEYS = ["ArrowRight", "ArrowLeft", "ArrowDown", "ArrowUp"];

    const handleKeyDown = (event) => {
      if (ARROW_KEYS.includes(event.key)) {
        event.preventDefault();

        switch (event.key) {
          case "ArrowRight":
            goRight();
            break;
          case "ArrowLeft":
            goLeft();
            break;
          case "ArrowDown":
            goDown();
            break;
          case "ArrowUp":
            goUp();
            break;
          default:
            break;
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [currentChapter, currentLesson]);

  useEffect(() => {
    if (currentLesson === -1 && selectedChapterRef.current !== null) {
      selectedChapterRef.current.scrollIntoView({
        block: "nearest",
        behavior: "smooth",
      });
    }
  }, [currentLesson, currentChapter]);

  return (
    <div className="course-container">
      <div className="navigation-buttons">
        <button onClick={goUp} className="nav-button">
          <InterChapterTopArrow />
        </button>
        <button onClick={goLeft} className="nav-button">
          <LeftArrow />
        </button>
        <button onClick={goRight} className="nav-button">
          <RightArrow />
        </button>
        <button onClick={goDown} className="nav-button">
          <InterChapterBottomArrow />
        </button>
      </div>
      <div className="course-content" ref={courseContentRef}>
        {chapters.map((chapter, chapterIndex) => (
          <>
            <Chapter
              chapter={chapter}
              chapterIndex={chapterIndex}
              currentChapter={currentChapter}
              currentLesson={currentLesson}
              highlightedTraversal={highlightedTraversal}
              traversalDirection={traversalDirection}
              selectedChapterRef={selectedChapterRef}
              key={chapter.id}
              isComingFromChapter={chapterTraversalDir}
              isComingFromChapterToLesson={isComingFromChapterToLesson}
            />

            {chapterIndex !== chapters.length - 1 && (
              <div style={{ display: "flex", height: 14, zIndex: 1 }}>
                <div
                  style={{
                    margin: "0 10px",
                    display: "flex",
                    justifyContent: "center",
                    flexBasis: 200,
                  }}
                >
                  <div className="inter-chapter-arrow-container">
                    <InterChapterTopArrow
                      classNames={`arrow-up ${
                        chapterTraversalDir === "up" &&
                        currentChapter === chapterIndex
                          ? "highlight-forward"
                          : ""
                      }`}
                    />

                    <InterChapterBottomArrow
                      classNames={`arrow-down ${
                        chapterTraversalDir === "down" &&
                        currentChapter === chapterIndex + 1
                          ? "highlight-forward"
                          : ""
                      }`}
                    />
                  </div>
                </div>
              </div>
            )}
          </>
        ))}
      </div>
    </div>
  );
};

function Chapter({
  chapter,
  currentLesson,
  chapterIndex,
  currentChapter,
  highlightedTraversal,
  traversalDirection,
  selectedChapterRef,
  isComingFromChapter,
  isComingFromChapterToLesson,
}) {
  const isThisTheCurrentChapter = chapterIndex === currentChapter;

  const currentChapterClassName = isThisTheCurrentChapter ? "active" : "";

  const isTheChapterSelected = isThisTheCurrentChapter && currentLesson === -1;

  const classSelectedName = isTheChapterSelected ? "selected" : "";

  return (
    <>
      <div key={chapter.id} className={`chapter-container active`}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          {/* <div
            className={`previous-pointer ${currentChapterClassName} ${classSelectedName}`}
          ></div> */}

          <div style={{ display: "flex" }}>
            <h5
              className={`chapter-name ${currentChapterClassName} ${classSelectedName}`}
              ref={isTheChapterSelected ? selectedChapterRef : null}
            >
              {chapter.name}
            </h5>

            <div
              className={`chapter-right-pointer ${currentChapterClassName} ${classSelectedName}`}
            ></div>
          </div>

          {/* <div
            className={`next-pointer ${currentChapterClassName} ${classSelectedName}`}
          ></div> */}
        </div>

        <div style={{ display: "flex", flexDirection: "column", width: 25 }}>
          <div
            className={`traversal-icon ${
              isThisTheCurrentChapter &&
              currentLesson === 0 &&
              isComingFromChapterToLesson
                ? "highlight-forward"
                : ""
            }`}
            style={{ transform: "translate(-7px)" }}
          >
            <RightArrow />
          </div>

          <div
            className={`traversal-icon ${
              isTheChapterSelected && !isComingFromChapter
                ? "highlight-backward"
                : ""
            }`}
            style={{ transform: "translate(-10px)" }}
          >
            <LeftArrow />
          </div>
        </div>

        <div className="lessons">
          <RenderLesson
            chapter={chapter}
            chapterIndex={chapterIndex}
            currentLesson={currentLesson}
            currentChapter={currentChapter}
            highlightedTraversal={highlightedTraversal}
            traversalDirection={traversalDirection}
          />
        </div>
      </div>
    </>
  );
}

function RenderLesson({
  chapter,
  chapterIndex,
  currentLesson,
  currentChapter,
  highlightedTraversal,
  traversalDirection,
}) {
  useEffect(() => {
    const activeLessonEl = document.getElementById("active");

    if (currentLesson === -1) {
      return;
    }

    activeLessonEl.scrollIntoView({
      behavior: "smooth",
      inline: "nearest",
      block: "nearest",
    });
  }, [currentLesson]);

  return (
    <>
      {chapter.lessons.map((lesson, lessonIndex) => (
        <React.Fragment key={lessonIndex}>
          <div
            className="lesson"
            id={
              lessonIndex === currentLesson && chapterIndex === currentChapter
                ? "active"
                : ""
            }
          >
            <h5>{lesson}</h5>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: 25,
            }}
          >
            {lessonIndex < chapter.lessons.length - 1 && (
              <div
                className={`traversal-icon ${
                  highlightedTraversal === lessonIndex + 1 &&
                  traversalDirection === "forward" &&
                  chapterIndex === currentChapter
                    ? "highlight-forward"
                    : ""
                }`}
                style={{
                  transform: "translateX(-16px)",
                }}
              >
                <RightArrow />
              </div>
            )}

            {lessonIndex === chapter.lessons.length - 1 && (
              <>
                <div
                  className={`traversal-icon ${
                    highlightedTraversal === lessonIndex + 1 &&
                    traversalDirection === "forward" &&
                    chapterIndex === currentChapter
                      ? "highlight-forward"
                      : ""
                  }`}
                  style={{
                    transform: "translateX(-12px)",
                    display: "flex",
                    flexDirection: "column",
                    height: "20px",
                  }}
                >
                  <svg
                    width="63"
                    height="18"
                    viewBox="0 0 63 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_15_4)">
                      <path
                        d="M47.9649 8.52632L-2.89875e-07 8.52632M47.9649 15.1579L47.9649 1.89474M52.7141 12.6711L52.7141 4.38158M57.4634 10.1842L57.4634 6.86842"
                        stroke="black"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_15_4">
                        <rect
                          width="18"
                          height="63"
                          fill="white"
                          transform="translate(0 18) rotate(-90)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </>
            )}

            {lessonIndex < chapter.lessons.length - 1 && lessonIndex >= 0 && (
              <div
                className={`traversal-icon ${
                  highlightedTraversal === lessonIndex &&
                  traversalDirection === "backward" &&
                  chapterIndex === currentChapter
                    ? "highlight-backward"
                    : ""
                }`}
                style={{ transform: "translateX(-1px)" }}
              >
                <LeftArrow />
              </div>
            )}
          </div>
        </React.Fragment>
      ))}
    </>
  );
}

export default App;
