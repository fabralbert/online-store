import { useDispatch } from "react-redux";
import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";
import type { RootState } from "../store";

export const useAppDispatch = () => useDispatch<ThunkDispatch<RootState, unknown, AnyAction>>();