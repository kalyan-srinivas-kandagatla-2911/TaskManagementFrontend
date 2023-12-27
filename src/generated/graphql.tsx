import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTimeISO: { input: any; output: any; }
};

export type Mutation = {
  __typename?: 'Mutation';
  createTask: Task;
  signInUser: User;
  signUpUser: User;
};


export type MutationCreateTaskArgs = {
  data: CreateTaskInput;
};


export type MutationSignInUserArgs = {
  data: SignInInput;
};


export type MutationSignUpUserArgs = {
  data: SignUpInput;
};

export type Query = {
  __typename?: 'Query';
  getMe: User;
  helloworld: Scalars['String']['output'];
};

/** set of roles for task_management */
export enum Role {
  Admin = 'ADMIN',
  TeamOneHead = 'TEAM_ONE_HEAD',
  TeamTwoHead = 'TEAM_TWO_HEAD',
  User = 'USER'
}

export type SignInInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
  team: Scalars['String']['input'];
};

export type SignUpInput = {
  email: Scalars['String']['input'];
  username: Scalars['String']['input'];
  password: Scalars['String']['input'];
  team: Scalars['String']['input'];
};

export type Task = {
  __typename?: 'Task';
  deadline?: Maybe<Scalars['DateTimeISO']['output']>;
  desciption: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  title: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
};

export type User = {
  __typename?: 'User';
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  offId: Scalars['String']['output'];
  role: Role;
  team: Scalars['String']['output'];
};

export type CreateTaskInput = {
  assignTeam: Scalars['String']['input'];
  deadline?: InputMaybe<Scalars['DateTimeISO']['input']>;
  description: Scalars['String']['input'];
  title: Scalars['String']['input'];
};

export type SignUpUserMutationVariables = Exact<{
  data: SignUpInput;
}>;


export type SignUpUserMutation = { __typename?: 'Mutation', signUpUser: { __typename?: 'User', username: string } };


export const SignUpUserDocument = gql`
    mutation SignUpUser($data: SignUpInput!) {
  signUpUser(data: $data) {
    username
  }
}
    `;
export type SignUpUserMutationFn = Apollo.MutationFunction<SignUpUserMutation, SignUpUserMutationVariables>;

/**
 * __useSignUpUserMutation__
 *
 * To run a mutation, you first call `useSignUpUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignUpUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signUpUserMutation, { data, loading, error }] = useSignUpUserMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useSignUpUserMutation(baseOptions?: Apollo.MutationHookOptions<SignUpUserMutation, SignUpUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SignUpUserMutation, SignUpUserMutationVariables>(SignUpUserDocument, options);
      }
export type SignUpUserMutationHookResult = ReturnType<typeof useSignUpUserMutation>;
export type SignUpUserMutationResult = Apollo.MutationResult<SignUpUserMutation>;
export type SignUpUserMutationOptions = Apollo.BaseMutationOptions<SignUpUserMutation, SignUpUserMutationVariables>;