function toKebabCase(str) {
    // Step 1: Return if already kebab case
    if (/^[a-z0-9]+(-[a-z0-9]+)*$/.test(str)) {
        return str;
    }

    // Step 2 & 3: Replace underscores with hyphens, insert hyphens before uppercase letters, and lowercase
    return str
        .replace(/_/g, '-') // snake case to hyphens
        .replace(/([a-z0-9])([A-Z])/g, '$1-$2') // camel/Pascal case to hyphens
        .replace(/([A-Z])([A-Z][a-z])/g, '$1-$2') // handle PascalCase acronyms
        .toLowerCase();
}