/* eslint-disable functional/prefer-readonly-type */

// Github Response Types
export interface Owner {
  readonly login: string;
  readonly id: number;
  readonly node_id: string;
  readonly avatar_url: string;
  readonly gravatar_id: string;
  readonly url: string;
  readonly received_events_url: string;
  readonly type: string;
  readonly html_url: string;
  readonly followers_url: string;
  readonly following_url: string;
  readonly gists_url: string;
  readonly starred_url: string;
  readonly subscriptions_url: string;
  readonly organizations_url: string;
  readonly repos_url: string;
  readonly events_url: string;
  readonly site_admin: boolean;
}

export interface License {
  readonly key: string;
  readonly name: string;
  readonly url: string;
  readonly spdx_id: string;
  readonly node_id: string;
  readonly html_url: string;
}

export interface Item {
  readonly id: number;
  readonly node_id: string;
  readonly name: string;
  readonly full_name: string;
  readonly owner: Owner;
  readonly private: boolean;
  readonly html_url: string;
  readonly description: string;
  readonly fork: boolean;
  readonly url: string;
  readonly created_at: Date;
  readonly updated_at: Date;
  readonly pushed_at: Date;
  readonly homepage: string;
  readonly size: number;
  readonly stargazers_count: number;
  readonly watchers_count: number;
  readonly language: string;
  readonly forks_count: number;
  readonly open_issues_count: number;
  readonly master_branch: string;
  readonly default_branch: string;
  readonly score: number;
  readonly archive_url: string;
  readonly assignees_url: string;
  readonly blobs_url: string;
  readonly branches_url: string;
  readonly collaborators_url: string;
  readonly comments_url: string;
  readonly commits_url: string;
  readonly compare_url: string;
  readonly contents_url: string;
  readonly contributors_url: string;
  readonly deployments_url: string;
  readonly downloads_url: string;
  readonly events_url: string;
  readonly forks_url: string;
  readonly git_commits_url: string;
  readonly git_refs_url: string;
  readonly git_tags_url: string;
  readonly git_url: string;
  readonly issue_comment_url: string;
  readonly issue_events_url: string;
  readonly issues_url: string;
  readonly keys_url: string;
  readonly labels_url: string;
  readonly languages_url: string;
  readonly merges_url: string;
  readonly milestones_url: string;
  readonly notifications_url: string;
  readonly pulls_url: string;
  readonly releases_url: string;
  readonly ssh_url: string;
  readonly stargazers_url: string;
  readonly statuses_url: string;
  readonly subscribers_url: string;
  readonly subscription_url: string;
  readonly tags_url: string;
  readonly teams_url: string;
  readonly trees_url: string;
  readonly clone_url: string;
  readonly mirror_url: string;
  readonly hooks_url: string;
  readonly svn_url: string;
  readonly forks: number;
  readonly open_issues: number;
  readonly watchers: number;
  readonly has_issues: boolean;
  readonly has_projects: boolean;
  readonly has_pages: boolean;
  readonly has_wiki: boolean;
  readonly has_downloads: boolean;
  readonly archived: boolean;
  readonly disabled: boolean;
  readonly license: License;
}

export interface RawRepositories {
  readonly total_count: number;
  readonly incomplete_results: boolean;
  readonly items: readonly Item[];
}

// Mapped Response
export interface MappedItem {
  readonly name: string;
  readonly owner: string;
  readonly stars: number;
  readonly created_at: Date;
}

export interface MappedRepositories {
  readonly total_count: number;
  readonly incomplete_results: boolean;
  readonly items: MappedItem[];
}
