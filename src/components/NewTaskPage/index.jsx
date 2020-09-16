import React from "react";
import { useHistory } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import CreatableSelect from "react-select/creatable";
import { useDispatch, useSelector } from "react-redux";

import { ADD_NEW_TASK } from "../../store/actionTypes";

const NewTaskPage = () => {
  const history = useHistory();
  const { handleSubmit, register, errors, control } = useForm();
  const dispatch = useDispatch();

  const onSubmit = (values) =>
    dispatch({ type: ADD_NEW_TASK, payload: values });

  const { labels } = useSelector((state) => state.newTaskPageState);

  return (
    <div>
      <button onClick={() => history.push("plan")}>cofnij</button>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          name="name"
          ref={register({
            required: "Pole wymagane!",
          })}
        />
        {errors.name && errors.name.message}

        <input
          name="date"
          type="date"
          ref={register({
            required: "Pole wymagane!",
          })}
        />
        {errors.date && errors.date.message}

        <input
          name="time"
          type="time"
          ref={register({
            required: "Pole wymagane!",
          })}
        />
        {errors.time && errors.time.message}

        <Controller
          name="labels"
          as={CreatableSelect}
          isMulti
          options={labels}
          control={control}
        />

        <button type="submit">Dodaj</button>
      </form>
    </div>
  );
};

export default NewTaskPage;
