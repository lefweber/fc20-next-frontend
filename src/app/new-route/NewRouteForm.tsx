'use client';

import { PropsWithChildren, useActionState } from "react";
import { createRouteAction } from "./create-route.actions";

export function  NewRouteForm(props: PropsWithChildren) {
  const [ state, formAction ] = useActionState<
    {
      error?: string;
      success?: boolean;
    } | null,
    FormData
  >(createRouteAction, null);
  return (
    <form action={formAction} method="POST">
      {state?.error && (
        <div className="p-4 mb-3 border rounded text-contrast bg-red-700">
          { state.error }
        </div>
      )}

      {state?.success && (
        <div className="p-4 mb-3 border rounded text-contrast bg-green-700">
          Rota criada com sucesso!
        </div>
      )}
      { props.children }
    </form>
  );
}
