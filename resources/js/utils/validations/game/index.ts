import * as Yup from "yup";


export type GameSubmitForm = {
    game_id: string;
};

export const gameValidationSchema = Yup.object().shape({
    game_id: Yup.string(),
});
