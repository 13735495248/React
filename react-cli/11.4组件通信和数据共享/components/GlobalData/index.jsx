import React from 'react'
import { createContext, useReducer } from 'react'
import produce from 'immer'
export const GlobalDataCtx = createContext();

export default function GlobalData(props) {
    const [state, dispatch] = useReducer((state, action) => {
        const { type } = action;
        switch (type) {
            case 'add':
                return produce(state, draft => {
                    draft.score++;
                });
            default:
                return produce(state,()=>{});
        }
    }, {
        score: 57,
        teacher_name: '孔丘',
        student_name: '颜回'
    });
    return (
        <GlobalDataCtx.Provider value={{ state, dispatch }}>
            {props.children}
        </GlobalDataCtx.Provider>
    )
}
