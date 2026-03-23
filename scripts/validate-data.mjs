import data from '../src/data/cv-data.json' with { type: 'json' }

function fail(message) {
  console.error(`Data validation failed: ${message}`)
  process.exit(1)
}

const requiredProfile = [
  'name',
  'title',
  'location',
  'email',
  'about',
  'highlights',
  'coreArchitecturalFocus',
]
for (const key of requiredProfile) {
  if (!data.profile?.[key]) {
    fail(`profile.${key} is required`)
  }
}

if (!Array.isArray(data.skills) || data.skills.length === 0) {
  fail('skills must be a non-empty array')
}

for (const group of data.skills) {
  if (!group.domain || !Array.isArray(group.items) || group.items.length === 0) {
    fail('each skills item must include domain and non-empty items[]')
  }
}

for (const focus of data.profile.coreArchitecturalFocus) {
  if (!focus.title || !Array.isArray(focus.items) || focus.items.length === 0) {
    fail('each profile.coreArchitecturalFocus item must include title and non-empty items[]')
  }
}

if (!Array.isArray(data.education) || !Array.isArray(data.experience)) {
  fail('education and experience must be arrays')
}

function validateTimeline(items, type) {
  const ids = new Set()

  for (const item of items) {
    if (!item.id) {
      fail(`${type} item is missing id`)
    }
    if (ids.has(item.id)) {
      fail(`duplicate ${type} id: ${item.id}`)
    }
    ids.add(item.id)

    if (!item.summary || !Array.isArray(item.details)) {
      fail(`${type} item ${item.id} must include summary and details[]`)
    }
  }
}

validateTimeline(data.education, 'education')
validateTimeline(data.experience, 'experience')

console.log('Data validation passed.')
