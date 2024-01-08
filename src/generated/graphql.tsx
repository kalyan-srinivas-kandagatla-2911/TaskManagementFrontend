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
  approveSubmssion: Scalars['Boolean']['output'];
  createSubmission: Submission;
  createTask: Task;
  logOutUser: Scalars['Boolean']['output'];
  modifySubmissionInput: Scalars['Boolean']['output'];
  signInUser: User;
  signUpUser: User;
};


export type MutationApproveSubmssionArgs = {
  sub_id: Scalars['String']['input'];
};


export type MutationCreateSubmissionArgs = {
  data: CreateSubmissonInput;
};


export type MutationCreateTaskArgs = {
  data: CreateTaskInput;
};


export type MutationModifySubmissionInputArgs = {
  data: ModifySubmissionInput;
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
  getSubmissions: Array<Submission>;
  getTasks: Array<Task>;
  getTasksAssignedToMe: Array<Task>;
  getTasksCreatedByMe: Array<Task>;
  helloworld: Scalars['String']['output'];
};


export type QueryGetTasksAssignedToMeArgs = {
  email: Scalars['String']['input'];
};


export type QueryGetTasksCreatedByMeArgs = {
  email: Scalars['String']['input'];
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
  password: Scalars['String']['input'];
  team: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type Submission = {
  __typename?: 'Submission';
  files?: Maybe<Array<Scalars['String']['output']>>;
  id: Scalars['ID']['output'];
  submittedAt: Scalars['DateTimeISO']['output'];
  task: Task;
  user: User;
};

export type Task = {
  __typename?: 'Task';
  deadline?: Maybe<Scalars['DateTimeISO']['output']>;
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  submission?: Maybe<Submission>;
  title: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  user: User;
  users?: Maybe<Array<User>>;
};

export type User = {
  __typename?: 'User';
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  offId: Scalars['String']['output'];
  role: Role;
  submission: Submission;
  taskList: Array<Task>;
  tasks: Array<Task>;
  team: Scalars['String']['output'];
  username: Scalars['String']['output'];
};

export type CreateSubmissonInput = {
  files: Array<Scalars['String']['input']>;
  task_id: Scalars['String']['input'];
};

export type CreateTaskInput = {
  assignTaskToUsers: Array<Scalars['String']['input']>;
  deadline?: InputMaybe<Scalars['DateTimeISO']['input']>;
  description: Scalars['String']['input'];
  title: Scalars['String']['input'];
};

export type ModifySubmissionInput = {
  files: Array<Scalars['String']['input']>;
  sub_id: Scalars['String']['input'];
};

export type SignUpUserMutationVariables = Exact<{
  data: SignUpInput;
}>;


export type SignUpUserMutation = { __typename?: 'Mutation', signUpUser: { __typename?: 'User', username: string } };

export type SignInUserMutationVariables = Exact<{
  data: SignInInput;
}>;


export type SignInUserMutation = { __typename?: 'Mutation', signInUser: { __typename?: 'User', username: string } };

export type LogOutUserMutationVariables = Exact<{ [key: string]: never; }>;


export type LogOutUserMutation = { __typename?: 'Mutation', logOutUser: boolean };

export type CreateTaskMutationVariables = Exact<{
  data: CreateTaskInput;
}>;


export type CreateTaskMutation = { __typename?: 'Mutation', createTask: { __typename?: 'Task', title: string } };

export type GetMeQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMeQuery = { __typename?: 'Query', getMe: { __typename?: 'User', username: string, team: string, email: string, id: string, offId: string, role: Role } };


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
export const SignInUserDocument = gql`
    mutation SignInUser($data: SignInInput!) {
  signInUser(data: $data) {
    username
  }
}
    `;
export type SignInUserMutationFn = Apollo.MutationFunction<SignInUserMutation, SignInUserMutationVariables>;

/**
 * __useSignInUserMutation__
 *
 * To run a mutation, you first call `useSignInUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignInUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signInUserMutation, { data, loading, error }] = useSignInUserMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useSignInUserMutation(baseOptions?: Apollo.MutationHookOptions<SignInUserMutation, SignInUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SignInUserMutation, SignInUserMutationVariables>(SignInUserDocument, options);
      }
export type SignInUserMutationHookResult = ReturnType<typeof useSignInUserMutation>;
export type SignInUserMutationResult = Apollo.MutationResult<SignInUserMutation>;
export type SignInUserMutationOptions = Apollo.BaseMutationOptions<SignInUserMutation, SignInUserMutationVariables>;
export const LogOutUserDocument = gql`
    mutation logOutUser {
  logOutUser
}
    `;
export type LogOutUserMutationFn = Apollo.MutationFunction<LogOutUserMutation, LogOutUserMutationVariables>;

/**
 * __useLogOutUserMutation__
 *
 * To run a mutation, you first call `useLogOutUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogOutUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logOutUserMutation, { data, loading, error }] = useLogOutUserMutation({
 *   variables: {
 *   },
 * });
 */
export function useLogOutUserMutation(baseOptions?: Apollo.MutationHookOptions<LogOutUserMutation, LogOutUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LogOutUserMutation, LogOutUserMutationVariables>(LogOutUserDocument, options);
      }
export type LogOutUserMutationHookResult = ReturnType<typeof useLogOutUserMutation>;
export type LogOutUserMutationResult = Apollo.MutationResult<LogOutUserMutation>;
export type LogOutUserMutationOptions = Apollo.BaseMutationOptions<LogOutUserMutation, LogOutUserMutationVariables>;
export const CreateTaskDocument = gql`
    mutation CreateTask($data: createTaskInput!) {
  createTask(data: $data) {
    title
  }
}
    `;
export type CreateTaskMutationFn = Apollo.MutationFunction<CreateTaskMutation, CreateTaskMutationVariables>;

/**
 * __useCreateTaskMutation__
 *
 * To run a mutation, you first call `useCreateTaskMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateTaskMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createTaskMutation, { data, loading, error }] = useCreateTaskMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateTaskMutation(baseOptions?: Apollo.MutationHookOptions<CreateTaskMutation, CreateTaskMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateTaskMutation, CreateTaskMutationVariables>(CreateTaskDocument, options);
      }
export type CreateTaskMutationHookResult = ReturnType<typeof useCreateTaskMutation>;
export type CreateTaskMutationResult = Apollo.MutationResult<CreateTaskMutation>;
export type CreateTaskMutationOptions = Apollo.BaseMutationOptions<CreateTaskMutation, CreateTaskMutationVariables>;
export const GetMeDocument = gql`
    query getMe {
  getMe {
    username
    team
    email
    id
    offId
    role
  }
}
    `;

/**
 * __useGetMeQuery__
 *
 * To run a query within a React component, call `useGetMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetMeQuery(baseOptions?: Apollo.QueryHookOptions<GetMeQuery, GetMeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMeQuery, GetMeQueryVariables>(GetMeDocument, options);
      }
export function useGetMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMeQuery, GetMeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMeQuery, GetMeQueryVariables>(GetMeDocument, options);
        }
export function useGetMeSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetMeQuery, GetMeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetMeQuery, GetMeQueryVariables>(GetMeDocument, options);
        }
export type GetMeQueryHookResult = ReturnType<typeof useGetMeQuery>;
export type GetMeLazyQueryHookResult = ReturnType<typeof useGetMeLazyQuery>;
export type GetMeSuspenseQueryHookResult = ReturnType<typeof useGetMeSuspenseQuery>;
export type GetMeQueryResult = Apollo.QueryResult<GetMeQuery, GetMeQueryVariables>;