export interface GithubPaginate<Item> {
    total_count:        number;
    incomplete_results: boolean;
    items:              Item[];
}