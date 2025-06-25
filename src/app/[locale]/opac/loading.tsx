import React from 'react';

export default function OpacLoading() {
  return (
    <div style={{ background: '#f8f9fb', minHeight: '100vh', padding: 24 }}>
      {/* Breadcrumb skeleton */}
      <div
        style={{ width: 180, height: 18, background: '#e5e7eb', borderRadius: 6, marginBottom: 16 }}
      />
      {/* Title skeleton */}
      <div
        style={{
          width: 320,
          height: 32,
          background: '#e5e7eb',
          borderRadius: 8,
          margin: '0 auto 12px auto',
        }}
      />
      {/* Subtitle skeleton */}
      <div
        style={{
          width: 480,
          height: 18,
          background: '#e5e7eb',
          borderRadius: 6,
          margin: '0 auto 32px auto',
        }}
      />
      {/* Search bar skeleton */}
      <div
        style={{
          background: '#fff',
          borderRadius: 16,
          padding: 24,
          boxShadow: '0 1px 4px #e5e7eb',
          marginBottom: 32,
        }}
      >
        <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
          <div style={{ flex: 1, height: 40, background: '#e5e7eb', borderRadius: 8 }} />
          <div style={{ width: 90, height: 40, background: '#e5e7eb', borderRadius: 8 }} />
          <div style={{ width: 120, height: 40, background: '#e5e7eb', borderRadius: 8 }} />
          <div style={{ width: 120, height: 40, background: '#e5e7eb', borderRadius: 8 }} />
        </div>
        <div
          style={{
            width: '100%',
            height: 18,
            background: '#e5e7eb',
            borderRadius: 6,
            marginTop: 18,
          }}
        />
      </div>
      {/* Section title skeleton */}
      <div
        style={{ width: 200, height: 24, background: '#e5e7eb', borderRadius: 8, marginBottom: 24 }}
      />
      {/* Book cards skeleton */}
      <div style={{ display: 'flex', gap: 24 }}>
        {[1, 2, 3, 4, 5].map((i) => (
          <div
            key={i}
            style={{
              background: '#fff',
              borderRadius: 16,
              padding: 16,
              width: 260,
              minHeight: 260,
              boxShadow: '0 1px 4px #e5e7eb',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <div
              style={{
                width: 200,
                height: 120,
                background: '#e5e7eb',
                borderRadius: 12,
                marginBottom: 16,
              }}
            />
            <div
              style={{
                width: 180,
                height: 18,
                background: '#e5e7eb',
                borderRadius: 6,
                marginBottom: 8,
              }}
            />
            <div style={{ width: 120, height: 14, background: '#e5e7eb', borderRadius: 6 }} />
          </div>
        ))}
      </div>
      {/* Button skeleton */}
      <div
        style={{
          width: 120,
          height: 36,
          background: '#e5e7eb',
          borderRadius: 8,
          margin: '32px auto 0 auto',
        }}
      />
    </div>
  );
}
